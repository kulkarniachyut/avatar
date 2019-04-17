import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AvatarModel } from '../../models/avatarViewModal';

import { HttpClient, HttpHeaders } from '@angular/common/http';


const initialResultresultSubject = [{
  person: null,
  data: null
}];

@Injectable({
  providedIn: 'root'
})

export class AvatarCommunityService {
  tempData  =
    [
      {person: 'Avatar X', data: { 'level': 'pro' , image: '../../../../assets/gamer_female.jpg'} },
      {person: 'Avatar Y', data: { 'level': 'Advanced' , image: '../../../../assets/rave_female.jpg'} },
      {person: 'Avatar Z', data: { 'level': 'Intermediate' , image: '../../../../assets/mom.jpg'} },
    ];

  postUrl = 'http://localhost:3003/api/data/';

  result = new BehaviorSubject<any>(initialResultresultSubject);
  resultObservable = this.result.asObservable();

  constructor(private http: HttpClient) { }

  httpCall(httpBody) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<any>(this.postUrl, httpBody, httpOptions);
  }

  generateResults(param): void {
    this.result.next(this.tempData);

    // this.httpCall(param).toPromise().then( data => {
    //   this.result.next(data);
    // });
  }
  getResults () {
    return this.resultObservable;
  }

  sendAvatar(avatar) {
    console.log('SEND');
  }
}
