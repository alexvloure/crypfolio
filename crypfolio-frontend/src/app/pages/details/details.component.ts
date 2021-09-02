import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

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
