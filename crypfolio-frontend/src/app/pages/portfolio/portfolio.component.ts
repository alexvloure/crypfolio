import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  loading : boolean = false;

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdref.detectChanges();    
  }

  ngOnInit(): void {
  }

  public isLoading(event: boolean) {
    this.loading = event;
  }
}
