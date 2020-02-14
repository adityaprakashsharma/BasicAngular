import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {
	sub: any;
	recommended:boolean = true;
	target: boolean = true;

  textValue = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."    
//  universities: any = {'recommended':{'Harvard','Berkley','Carnegie Mellon','Cornell','USC','Caltech','Yale'},'targeted':{"Johns Hopkins, MIT, Stanford, Columbia"}};
	universities: any = {'recommended':['Harvard','Berkley','Carnegie Mellon','Cornell','USC','Caltech','Yale'],'targeted':["Johns Hopkins", "MIT", "Stanford", "Columbia"]};
  constructor(private route: ActivatedRoute) {
    console.log(route.children);
   }

  ngOnInit() {
  	this.sub = this.route.data.subscribe(v => {console.log(v);if(Object.keys(v).length > 0){this.recommended = v.recommended; this.target = v.target}});
    console.log("this.recommended"+this.recommended);
    console.log('This route is '+this.route.firstChild);

  }

}
