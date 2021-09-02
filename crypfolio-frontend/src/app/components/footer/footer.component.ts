import { Component, OnInit } from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isDonateBTCActive = false;
  isDonateETHActive = false;
  copy = faCopy;

  constructor() { }

  ngOnInit(): void {
  }

  goTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }


  donateBTCWindowToggle(){
    if(this.isDonateETHActive){
      this.isDonateETHActive = false;
    }
    this.isDonateBTCActive = !this.isDonateBTCActive;
  }

  donateETHWindowToggle(){
    if(this.isDonateBTCActive){
      this.isDonateBTCActive = false;
    }
    this.isDonateETHActive = !this.isDonateETHActive;
  }
}
