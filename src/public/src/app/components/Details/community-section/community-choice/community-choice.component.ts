import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-choice',
  templateUrl: './community-choice.component.html',
  styleUrls: ['./community-choice.component.css']
})
export class CommunityChoiceComponent implements OnInit {
  title = 'S 9';
  imageSource = '../../../../assets/eBayChoice/s9.jpg';
  constructor() { }

  ngOnInit() {
  }

}
