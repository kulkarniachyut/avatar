import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {

  imageSource = '../../../assets/landing.png';
  constructor(private router: Router) { }
  ngOnInit() {
  }
  redirect() {
    this.router.navigate(['dashBoard']);
  }
}
