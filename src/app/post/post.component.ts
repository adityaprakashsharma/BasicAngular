import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  	http.get(this.url)
  	.subscribe(response => {
  		this.posts = response;
  	})
  }

  ngOnInit() {
  }

  createPost(input: HTMLInputElement){
  	let post = {
  		title: input.value
  	}
  	this.http.post(this.url,post)
  	.subscribe(response=> {
  		console.log('Post - '+response.toString());
  	});

  }
}
