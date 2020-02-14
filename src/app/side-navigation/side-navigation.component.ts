import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationServiceService } from '../services/navigation-service.service';


@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  menuItemClicked: boolean = false;
  subscription: Subscription;
  constructor(private navService : NavigationServiceService) { 
    this.subscription = this.navService.getSideNavState().subscribe( isOpen => {
      if(isOpen){
        document.getElementsByClassName("side-nav")[0].classList.toggle("expand");
      }
    })
  }

  ngOnInit() {
  }

  handleLinkClick(event){
  //	document.getElementsByClassName("side-nav")[0].classList.toggle("expand");
  }
}
