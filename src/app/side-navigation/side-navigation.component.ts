import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  menuItemClicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleLinkClick(event){
  	document.getElementsByClassName("side-nav")[0].classList.toggle("expand");
  }
}
