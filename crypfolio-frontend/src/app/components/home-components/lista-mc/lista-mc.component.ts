import { ListaService } from './../../../services/lista.service';
import { TrendingService } from './../../../services/trending.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer, Subject, merge } from 'rxjs';
import { faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { switchMap } from 'rxjs/operators';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-lista-mc',
  templateUrl: './lista-mc.component.html',
  styleUrls: ['./lista-mc.component.scss']
})

// @Directive({selector: '[infoSlider]'})
export class ListaMcComponent implements OnInit {
  //Trending
  trendingTimer = timer(0, 36000000);
  trendingData : any = [];

  //Lista
  lista : any = [];
  manual$ = new Subject<void>();
  listTimer = merge(timer(0, 240000), this.manual$);
  currency : string = 'EUR';

  // Variables paginacion
  pNum = 1;
  page_number : number[] = [this.pNum, this.pNum+1, this.pNum+2]; 
  chevronRight = faChevronRight;
  chevronLeft = faChevronLeft;
  active : any = 1;
  
  // Loading new page
  loader = this.loadingBar.useRef();
  loading = false;

  // Loader list
  @Output() loadList = new EventEmitter<boolean>();

  //Valores conversion
  // newCurrency : string = 'EUR';
  // conversionRate : any = 1;
  // eur : any;
  // gbp : any;
  // usd : any;

  constructor(private ListaService:ListaService, private loadingBar: LoadingBarService, private TrendingService:TrendingService) {
    this.listTimer.pipe(switchMap(_ => this.ListaService.getLista(this.pNum,this.currency)))
      .subscribe(resp => {
        if (resp) {
          this.loader.complete();
          // window.scroll({ top: 0, behavior: 'auto' });
          this.loading = false;
          this.loadList.emit(false);
        }
        this.lista = resp;
      }
      );

    this.trendingTimer.subscribe(() => {
      this.TrendingService.getTrending().subscribe(resp => {
        if (resp){
          this.trendingData = resp;
        }
      });
    });

  }

  ngOnInit(){
    this.loadList.emit(true);
  }

  public refresh(): void {
    this.manual$.next();
    window.scroll({ top: 0, behavior: 'auto' });
    this.loader.start();
    this.loading = true;
  }

  //Lógica paginacion
  public updatePage_number(page:number){
    if(page == 15)
      this.page_number = [page-2, page-1, page]
    else if(page == 14)
      this.page_number = [page-2, page-1, page, page+1]
    else if(page == 1)
      this.page_number = [page, page+1, page+2]
    else if(page == 2)
      this.page_number = [page-1, page, page+1, page+2]
    else
      this.page_number = [page-2, page-1, page, page+1, page+2]
  }

  public pageSelected(selected : any) {
    if(selected == 'Previous' && this.pNum > 1){    //if prev is clicked, numbers will decrease by 1
      this.pNum--
      this.updatePage_number(this.pNum)
    }
    else if(selected == 'Next' && this.pNum < 15){   //if next is clicked numbers will increase by 1
      this.pNum++
      this.updatePage_number(this.pNum)
    }
    else if(selected != 'Previous' && selected != 'Next'){
      this.pNum = selected   //if a spesific number was selected, it will stay at the left side out of three numbers
      this.updatePage_number(this.pNum)
    }
    this.refresh();
  }

  public nextActive(){
    if(this.active != 15){
      this.active++
    }
  }
  public previousActive(){
    if(this.active != 1){
      this.active--
    }
  }
}
