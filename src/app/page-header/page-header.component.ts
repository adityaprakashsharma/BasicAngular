import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expandLeftNav () {
  	console.log('We are here');
  	document.getElementsByClassName("side-nav")[0].classList.toggle("expand"); 
  }
}
