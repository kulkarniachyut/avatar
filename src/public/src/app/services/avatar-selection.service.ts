import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { AvatarModel } from '../models/avatarViewModal';


const avatar: AvatarModel[] = [{
  serialNumber: null,
   image: null,
   content: null
}];

@Injectable({
  providedIn: 'root'
})

export class AvatarSelectionService {
  postUrl = 'http://localhost:3003/api/getAvatarPercentages';
  percentageData = [];
  tempData: AvatarModel[];
  initialAvatars: AvatarModel[] = [
    {serialNumber : 1, image: '../../../../assets/gamer_male.jpg', content: {'name': 'Gamer', 'percentage': 0}},
    {serialNumber : 2, image: '../../../../assets/athlete_male.png', content: {'name': 'Athlete', 'percentage': 0}},
    {serialNumber : 3, image: '../../../../assets/tech_male.jpeg', content: {'name': 'Techie', 'percentage': 0} },
    {serialNumber : 4, image: '../../../../assets/dad.jpeg', content: {'name': 'Dad', 'percentage': 0}},
    {serialNumber : 5, image: '../../../../assets/rave_male.jpg', content: {'name': 'Party Animal', 'percentage': 0}}
  ];

  avatars = new BehaviorSubject<AvatarModel[]>(avatar);
  avatarObservable = this.avatars.asObservable();

  constructor(private http: HttpClient) { }

  httpCall(httpBody) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<any>(this.postUrl, httpBody, httpOptions);
  }

  getAvatars() {
    this.avatars.next(this.initialAvatars);
    this.httpCall(JSON.stringify({'userId': 9})).toPromise().then( data => {
      this.percentageData = data;
      this.avatars.next(this.managePercentages(this.initialAvatars, this.percentageData));
    });
    return this.avatarObservable;
  }

  managePercentages(avatarArray, percentageArray) {
    for (let i = 0 ; i < avatarArray.length; i++ ) {
        avatarArray[i].content.percentage = percentageArray[i];
    }
    return avatarArray;
  }

}
