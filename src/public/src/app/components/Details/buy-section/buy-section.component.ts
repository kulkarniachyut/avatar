import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-buy-section',
  templateUrl: './buy-section.component.html',
  styleUrls: ['./buy-section.component.css']
})
export class BuySectionComponent implements OnInit {
  Suggestions = [
    {avatar: 'abc', data: {image: '../../../assets/dad.jpeg', price: '$10', name: 'item One'}},
    {avatar: 'abc', data: {image: '../../../assets/dad.jpeg', price: '$10', name: 'item Two'}},
    {avatar: 'abc', data: {image: '../../../assets/dad.jpeg', price: '$10', name: 'item Three'}},
    {avatar: 'abc', data: {image: '../../../assets/dad.jpeg', price: '$10', name: 'item Four'}}
   ];
   Suggestions2 = [
    {avatar: 'abc', data: {image: '../../../assets/gamer_male.jpg', price: '$10', name: 'item One'}},
    {avatar: 'abc', data: {image: '../../../assets/gamer_male.jpg', price: '$10', name: 'item Two'}},
    {avatar: 'abc', data: {image: '../../../assets/dad.jpeg', price: '$10', name: 'item Three'}},
    {avatar: 'abc', data: {image: '../../../assets/gamer_male.jpg', price: '$10', name: 'item Four'}}
   ];
   dataSet = {
     1: [
      {avatar: 'abc', data: {image: '../../../assets/Gaming/graphic2.jpg', price: '$480', name: 'gTx 560'}},
      {avatar: 'abc', data: {image: '../../../assets/Gaming/graphicCard.jpg', price: '$400', name: 'gTx500'}},
      {avatar: 'abc', data: {image: '../../../assets/Gaming/mouse.jpeg', price: '$40', name: 'Mouse'}},
      {avatar: 'abc', data: {image: '../../../assets/Gaming/tech_male.jpeg', price: '$55', name: 'KeyBoard'}}
     ],
     2: [
      {avatar: 'abc', data: {image: '../../../assets/Athlete/AdidasShoes.jpg', price: '$30', name: 'Shoe'}},
      {avatar: 'abc', data: {image: '../../../assets/Athlete/bike.png', price: '$100', name: 'Bike'}},
      {avatar: 'abc', data: {image: '../../../assets/Athlete/bikeMount.png', price: '$10', name: 'mount'}},
      {avatar: 'abc', data: {image: '../../../assets/Athlete/compressionWear.jpg', price: '$70', name: 'compression'}},
      {avatar: 'abc', data: {image: '../../../assets/Athlete/football.jpg', price: '$26', name: 'football'}}
     ],
     3: [
      {avatar: 'abc', data: {image: '../../../assets/techie/8plus.png', price: '$800', name: '8 Plus'}},
      {avatar: 'abc', data: {image: '../../../assets/techie/algorithms.jpg', price: '$32', name: 'Algorithms'}},
      {avatar: 'abc', data: {image: '../../../assets/techie/desk.jpg', price: '$63', name: 'Desk'}},
      {avatar: 'abc', data: {image: '../../../assets/techie/dualMonitor.jpg', price: '$70', name: 'Monitor'}},
      {avatar: 'abc', data: {image: '../../../assets/techie/goPro.jpg', price: '$226', name: 'GoPro'}}
     ],
     4: [
      {avatar: 'abc', data: {image: '../../../assets/dad/cap.jpg', price: '$10', name: 'Cap'}},
      {avatar: 'abc', data: {image: '../../../assets/dad/grill.jpg', price: '$32', name: 'Grill'}},
      {avatar: 'abc', data: {image: '../../../assets/dad/mug.jpg', price: '$6', name: 'Mug'}},
      {avatar: 'abc', data: {image: '../../../assets/dad/shaver.jpg', price: '$70', name: 'Shaver'}},
      {avatar: 'abc', data: {image: '../../../assets/dad/shirt.jpg', price: '$23', name: 'Shirt'}}
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
