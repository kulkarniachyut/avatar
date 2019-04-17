import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-rate-section',
  templateUrl: './rate-section.component.html',
  styleUrls: ['./rate-section.component.css']
})
export class RateSectionComponent implements OnInit {
  Suggestions = [];
  dataSet = {
    1: [
     {avatar: 'abc', data: {image: '../../../assets/Gaming/mouse.jpeg', price: '$24', name: 'Mouse'}},
     {avatar: 'abc', data: {image: '../../../assets/Gaming/graphicCard.jpg', price: '$480', name: 'gTx 560'}},
     {avatar: 'abc', data: {image: '../../../assets/Gaming/tech_male.jpeg', price: '$55', name: 'KeyBoard'}},
     {avatar: 'abc', data: {image: '../../../assets/Gaming/graphic2.jpg', price: '$400', name: 'gTx 500'}},
    ],
    2: [
     {avatar: 'abc', data: {image: '../../../assets/Athlete/bikeMount.png', price: '$10', name: 'mount'}},
     {avatar: 'abc', data: {image: '../../../assets/Athlete/AdidasShoes.jpg', price: '$30', name: 'Shoe'}},
     {avatar: 'abc', data: {image: '../../../assets/Athlete/compressionWear.jpg', price: '$70', name: 'compression'}}
    ],
    3: [
     {avatar: 'abc', data: {image: '../../../assets/techie/desk.jpg', price: '$63', name: 'Desk'}},
     {avatar: 'abc', data: {image: '../../../assets/techie/8plus.png', price: '$800', name: '8 Plus'}},
     {avatar: 'abc', data: {image: '../../../assets/techie/dualMonitor.jpg', price: '$70', name: 'Monitor'}}
    ],
    4: [
     {avatar: 'abc', data: {image: '../../../assets/dad/grill.jpg', price: '$32', name: 'Grill'}},
     {avatar: 'abc', data: {image: '../../../assets/dad/shaver.jpg', price: '$70', name: 'Shaver'}},
     {avatar: 'abc', data: {image: '../../../assets/dad/mug.jpg', price: '$6', name: 'Mug'}},
    ],
    5: [
     {avatar: 'abc', data: {image: '../../../assets/rave/berrBong.jpg', price: '$20', name: 'Beer Bong'}},
     {avatar: 'abc', data: {image: '../../../assets/rave/galsses.jpg', price: '$7', name: 'Glasses'}},
     {avatar: 'abc', data: {image: '../../../assets/rave/hooka.jpg', price: '$63', name: 'Hooka '}},
     {avatar: 'abc', data: {image: '../../../assets/rave/mask.jpg', price: '$25', name: 'Mask'}},
     {avatar: 'abc', data: {image: '../../../assets/rave/partySticks.jpg', price: '$22', name: 'Sticks'}}
    ]
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( data => {
      this.Suggestions = this.dataSet[this.route.snapshot.params.id];
    });
  }

}
