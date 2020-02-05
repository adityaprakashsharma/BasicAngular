import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent implements OnInit {
  @Input() universityObj: any;	
  constructor() { }

  ngOnInit() {
  }

}
