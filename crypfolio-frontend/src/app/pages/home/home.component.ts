import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentChecked {

  loading : boolean = false;

  constructor(private cdref: ChangeDetectorRef){}

  ngAfterContentChecked() {
    this.cdref.detectChanges();    
  }

  ngOnInit(): void {
  }

  public isLoading(event: boolean){
    this.loading = event;
  }
}
