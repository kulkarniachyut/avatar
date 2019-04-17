import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { PostsService } from '../../../../services/localStorage/posts.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postDataOfMe = [];
  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.postService.getHistoryData().subscribe( data => {
      console.log('data is ', data );
      this.postDataOfMe = data;
      console.log('Array is ', this.postDataOfMe );
    });
  }

}
