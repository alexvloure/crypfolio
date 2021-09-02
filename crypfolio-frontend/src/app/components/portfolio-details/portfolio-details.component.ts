import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { InfoMoneda } from './../../models/info-moneda';
import { MonedaPortfolioValor } from './../../models/moneda-portfolio-valor';
import { timer, Subject, merge } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MonedaPortfolio } from './../../models/moneda-portfolio';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faWallet, faArrowUp, faArrowDown, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Options } from 'highcharts';
import { Chart as ch } from 'angular-highcharts';
import { MonedaPortfolioService } from 'src/app/services/moneda-portfolio.service';
import { MonedaData } from 'src/app/models/moneda-data';


@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit {
  //Loader data
  @Output() loadData = new EventEmitter<boolean>();

  //F-Awesome
  arrowUp = faArrowUp;
  arrowDown = faArrowDown;
  plusCircle = faPlusCircle;

  // DATA
  manual$ = new Subject<any>();
  monedaTimer = merge(timer(0, 300000), this.manual$);
  monedaLista : InfoMoneda[] = [];
  monedaListaString : string[] = [];
  keyword: string = "moneda";
  addFailed: boolean = false;
  monedaPortfolioValor_arr! : MonedaPortfolioValor[];
  topPortfolio! : MonedaPortfolioValor[];
  valueTActual = 0;
  valueTCompra = 0;
  valueTop = 0;
  btcCant! : string;
  porcentajeTop! : number;
  cambio! : string;
  cambioP! : boolean;
  ids! : string;
  dominancia! : string;
  resp! : MonedaPortfolio[];
  existsData : boolean = false;
  errMsg! : string;
  dData : { name: string, y: number, color: string }[] = [
  ];
  addNotActive : boolean = true;
  isDeleteValid: boolean = false;
  titleDelete: string = "Modo de borrado";
  monedaPortfolio! : MonedaPortfolio;
  nombreUsuario! : string;
  idMoneda! : string;
  moneda! : string;
  symbol!: string;
  cantidad! : number;
  precio! : number;

  public getColor(dData : any){
    for(var i=0; i<dData.length; i++){
      switch(dData[i].name){
        case 'BTC':
          dData[i].color = '#FF9900';
          break;
        case 'ETH':
          dData[i].color = '#627EEA';
          break;
        case 'ADA':
          dData[i].color = '#2a71d0';
          break;
        case 'DOT':
          dData[i].color = '#d90a75';
          break;
        case 'SOL':
          dData[i].color = '#825AEE';
          break;
        case 'Otras':
          dData[i].color = '#c2c2c2';
          break;
        default:
          var letters = '0123456789ABCDEF'.split('');
          var color = '#';
          for (var j = 0; j < 6; j++ ) {
            color += letters[Math.round(Math.random() * 15)];
          }
          dData[i].color = color;
          // dData[i].color = '#' + Math.floor(Math.random()*16777215).toString(16);
          break;
      }
    }
  }

  // DONUTCHART OPTIONS
  donutChartOptions: Options = {
    chart: {
      type: 'donut',
      plotShadow: false,
      backgroundColor: "transparent",
      spacing: [25, 5, 25, 5],
      width: '250',
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        size:'100%',
        innerSize: '99%',
        borderWidth: 20,
        borderColor: undefined,
        slicedOffset: 0,
        dataLabels: {
          connectorWidth: 0,
        },

      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: " ",
      style: {
        color: "white",
        fontSize: "0.9rem",
      }
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        center: ["50%","50%"],
        data: this.dData,
        dataLabels: {
          enabled: false,
          crop: true,
          animation: {
            defer: 1200,
          }
        },
        tooltip: {
          headerFormat: '<p style="font-size: 1.1em; font-weight: bold; font-family: sans-serif;">{point.key}</p>',
          pointFormat: '<br/><p style="font-size: 1em;">{point.y}</p>',
          valueSuffix: '%',
          
        }
      },
    ],
  };

  donutChart = new ch(this.donutChartOptions);

  constructor( private monedaPortfolioService : MonedaPortfolioService, private tokenService : TokenService, private router : Router) {    
    
  }

  private getData(){
    this.monedaTimer.pipe(switchMap(_ => this.monedaPortfolioService.getAll())).subscribe(resp => {
      if(resp){
        this.resp = resp;
        this.existsData = true;

        this.monedaPortfolioService.getPortfolioInfo(this.resp).subscribe(values => {
          let monedaData : MonedaData[] = values;

          let btcValue = 0;
          this.valueTCompra = 0;
          this.monedaPortfolioValor_arr = [];
          this.valueTActual = 0;
          for(var i=0; i<monedaData.length; i++){
            if(monedaData[i].id == 'bitcoin')
              btcValue = monedaData[i].current_price;
            this.resp.forEach(element => {
              if(element.idMoneda == monedaData[i].id){
                this.monedaPortfolioValor_arr.push(
                  new MonedaPortfolioValor(new MonedaPortfolio(element.nombreUsuario, element.idMoneda, element.moneda, element.symbol, element.cantidad, element.precio),
                    element.precio, monedaData[i].current_price, monedaData[i].image)
                );
                this.valueTActual += monedaData[i].current_price*element.cantidad;
                this.valueTCompra += element.cantidad*element.precio;
              }
            });
          }

          this.btcCant = (this.valueTActual/btcValue).toFixed(4) + " BTC";

          if(this.valueTActual >= this.valueTCompra){
            this.cambio = ((this.valueTActual-this.valueTCompra)/this.valueTCompra*100).toFixed(2);
            this.cambioP = true;
          } else {
            this.cambio = (100-(this.valueTActual/this.valueTCompra*100)).toFixed(2);
            this.cambioP = false;
          }
          

          this.monedaPortfolioValor_arr.sort((a, b) => (a.precioActual*a.monedaPortfolio.cantidad < b.precioActual*b.monedaPortfolio.cantidad) ? 1 : -1);
          this.topPortfolio = this.monedaPortfolioValor_arr.length >= 4 ? this.monedaPortfolioValor_arr.slice(0,3) : this.monedaPortfolioValor_arr;
          this.valueTop = 0;
          this.topPortfolio.forEach((element, index) => {
            this.valueTop += element.precioActual*element.monedaPortfolio.cantidad;
          })
          
          let porcentajeOtros = parseFloat((100-(this.valueTop/this.valueTActual*100)).toFixed(0));
          this.porcentajeTop = parseFloat((this.valueTop/this.valueTActual*100).toFixed(0));
          this.dominancia = this.topPortfolio[0].monedaPortfolio.symbol.toUpperCase() + " " +((this.topPortfolio[0].precioActual*this.topPortfolio[0].monedaPortfolio.cantidad)/this.valueTop*this.porcentajeTop).toFixed(0)+"%";
          
          this.dData = [];

          for(var i=0; i<this.topPortfolio.length; i++){
              let porcentaje = parseFloat(((this.topPortfolio[i].precioActual*this.topPortfolio[i].monedaPortfolio.cantidad)/this.valueTop*this.porcentajeTop).toFixed(0));
              this.dData.push(
                {name: this.topPortfolio[i].monedaPortfolio.symbol.toUpperCase(), y: porcentaje, color: "#000000"}
              );
          }
          
          if(this.monedaPortfolioValor_arr.length >= 4){
            this.dData.push(
              {name: "Otras", y: porcentajeOtros, color: "#000000"}
            );
          }

          if(this.donutChartOptions.series![0].type === 'pie'){
            this.getColor(this.dData);
            if(this.donutChartOptions.title?.text){
              this.donutChartOptions.title.text = this.dominancia;
            }
            this.donutChartOptions.series![0].data = this.dData;
            if(this.donutChartOptions.series![0].data != null){
              this.loadData.emit(false);      
            }
            this.donutChart = new ch(this.donutChartOptions);
          }
        })
      }
    }, 
    err => {
      this.existsData = false;
      this.loadData.emit(false);
    });
  }

  ngOnInit(): void {
    this.getData();
    this.loadData.emit(true);  
    this.nombreUsuario = this.tokenService.getUsername();
    this.monedaPortfolioService.getInfoMonedas().subscribe(info => {
      this.monedaLista = info;
      info.forEach(element => {
        this.monedaListaString.push(element.moneda);
      })
    });
  }

  public onDelete(idMoneda : string){
    if(this.isDeleteValid){
      this.monedaPortfolioValor_arr.forEach(element => {
        if(element.monedaPortfolio.idMoneda == idMoneda){
          let monedaDelete = new MonedaPortfolio(this.nombreUsuario, idMoneda, element.monedaPortfolio.moneda.toLowerCase(),
          element.monedaPortfolio.symbol, element.monedaPortfolio.cantidad, element.monedaPortfolio.precio);
          this.monedaPortfolioService.deleteMoneda(monedaDelete).subscribe(() => {
            this.isDeleteValid = false;
            this.manual$.next();
            if(this.monedaPortfolioValor_arr.length < 1){
              this.existsData = false;
            }
          });
        }
      })
    }
  }

  public activateDeleteMode() {
    this.isDeleteValid = !this.isDeleteValid;
    if(this.isDeleteValid){
      this.titleDelete = "Cancelar borrado";
    }else {
      this.titleDelete = "Modo de borrado";
    }
  }

  public addCrypto() {
    this.addNotActive = false;
  }

  public cancelAddCrypto(){
    this.addNotActive = true;
    this.cantidad = 0;
    this.precio = 0;
  }

  public selectEvent(item : any) {
    this.moneda = item.moneda;
    this.symbol = item.symbol;
    this.idMoneda = item.id;
  }

  public addMonedaPortfolio() {
    if(this.monedaListaString.indexOf(this.moneda) > -1){
      this.monedaPortfolio = new MonedaPortfolio(this.nombreUsuario, this.idMoneda, this.moneda.toLowerCase(), this.symbol, this.cantidad, this.precio);
      this.monedaPortfolioService.crear(this.monedaPortfolio).subscribe(
        () => {
            if(!this.existsData){
              this.getData();
              this.cancelAddCrypto();
            }else {
              this.manual$.next();
              this.cancelAddCrypto();
            }
        },
        err => {
          this.errMsg = err.error.mensaje;
          console.log(this.errMsg);
        }
      );
    } else {
      this.addFailed = true;
      this.cantidad = 0;
      this.precio = 0;
    }
  }
}
