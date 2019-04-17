import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-bay-choice',
  templateUrl: './e-bay-choice.component.html',
  styleUrls: ['./e-bay-choice.component.css']
})
export class EBayChoiceComponent implements OnInit {
  title = 'I Phone 10';
  imageSource = '../../../../assets/eBayChoice/iPhone.jpg';
  constructor() { }

  ngOnInit() {
  }

}
