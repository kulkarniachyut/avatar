import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  initialData = [];
  postsData = new BehaviorSubject<any>(this.initialData);
  DataObservable = this.postsData.asObservable();
  setHistoryData(postData) {
    let localStorageData = [];
    if (localStorage.getItem('posts') === null) {
      localStorage.setItem('posts', JSON.stringify([postData]));
      this.postsData.next([postData]);
    } else {
      localStorageData = JSON.parse(localStorage.getItem('posts'));
      localStorageData.unshift(postData);
      this.postsData.next(localStorageData);
      localStorage.setItem('posts', JSON.stringify(localStorageData));
    }
  }
  getHistoryData() {
    this.postsData.next(JSON.parse(localStorage.getItem('posts')));
    return this.DataObservable;
  }
}
