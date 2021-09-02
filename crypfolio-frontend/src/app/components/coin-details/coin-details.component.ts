import { HistoricDataCoinService } from './../../services/historic-data-coin.service';
import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { timer } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CoinDetailsService } from '../../services/coin-details.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

interface IHistoricData {
  time : number;
  price : number;
}

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})

export class CoinDetailsComponent implements AfterViewInit, OnInit {
  //Loader data
  @Output() loadData = new EventEmitter<boolean>();

  //Datos cripto
  detailsTimer = timer(0, 240000);
  detailsData : any = [];
  coin : any = "";
  isLoaded : boolean = false;
  description : any;

  //Gráfico
  bgColor : any = '#707070';
  bdColor : any = '#70707010';
  graphTimer = timer(0, 36000000);
  receivedHistoricData = [];
  historicDataPrices = [];
  historicDataTime : string[] = [];
  
  // Cargamos el gráfico con datos
  lineChartData: ChartDataSets[] = [
    { data:  this.historicDataPrices },
  ];

  public getData(){
    this.lineChartData[0].data = this.historicDataPrices;
    this.lineChartLabels = this.historicDataTime;
  }

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [];

  // Definimos las opciones del gráfico
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
          gridLines: {
              display: false,
          },
          ticks: {
            fontStyle: "bold",
            callback: function(tick, index) {
                return (index % 5) ? "" : tick;
            },
            maxRotation: 0,
            minRotation: 0,
          },
      }],
      yAxes: [{
          gridLines: {
              display: false,
          }   
      }]
    },
    tooltips: {
      // enabled: false,
    },
    elements: {
      point:{
          radius: 0
      }
    }
  };

  // Colores del gráfico
  lineChartColors: Color[] = [
    {
      backgroundColor: this.bdColor,
      borderColor: this.bgColor,
    }
  ];

  public chartColors(){
    if(this.historicDataPrices[0] >= this.historicDataPrices[this.historicDataPrices.length-1]){
      this.bgColor = '#dd000010';
      this.bdColor = '#dd0000';
    }else {
      this.bgColor = '#22ff7710';
      this.bdColor = '#22ff77';
    }
    this.lineChartColors[0].backgroundColor = this.bgColor;
    this.lineChartColors[0].borderColor = this.bdColor;
  }

  // Desactivamos la leyenda
  lineChartLegend = false;

  // Definimos el tipo de gráfico
  lineChartType = 'line' as ChartType;
  lineChartPlugins = [];

  // Conversion
  eurValueOg : any;
  cryptoInput : any;
  cryptoValueOg : any;
  eurInput : any;
  exchangeArrows = faExchangeAlt;

  constructor( private CoinDetailsService:CoinDetailsService, private route: ActivatedRoute, private HistoricDataCoinService:HistoricDataCoinService) {
    this.coin = this.route.snapshot.paramMap.get("id");
    this.detailsTimer.subscribe(() => {
      this.CoinDetailsService.getCoinDetails(this.coin).subscribe(resp => {
        if (resp){
          this.detailsData = resp;
          this.isLoaded = true;
          this.eurValueOg = this.detailsData.market_data.current_price.eur;
          this.cryptoValueOg = 1/this.detailsData.market_data.current_price.eur;
          this.loadData.emit(false);
        }
      });
    });
    
    this.graphTimer.subscribe(() => {
      this.HistoricDataCoinService.getCoinHistoricData(this.coin).subscribe(resp => {
        if(resp){
          for (let [key, value] of Object.entries(resp)) {
            if(key == 'prices'){
              this.receivedHistoricData = value;
              for(let i=0; i<this.receivedHistoricData.length; i++){
                let date = new Date(this.receivedHistoricData[i][0]);
                let month = date.getMonth()+1;
                this.historicDataTime.push(date.getDate()+"/"+month);
                this.historicDataPrices.push(this.receivedHistoricData[i][1]);
              }
              this.chartColors();
            }
          }
        }
      });
    })
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.getData();
    this.loadData.emit(true);
  }

  public cryptoToEur(value : number){
    this.eurInput = value*this.eurValueOg.toFixed(2);
  }

  public eurToCrypto(value : number) {
    this.cryptoInput = value*this.cryptoValueOg;
  }
}
