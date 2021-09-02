import { Component, OnInit, HostListener } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {
  arrowUp = faChevronUp;
  pageYoffset: number = 0;

  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(){
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
