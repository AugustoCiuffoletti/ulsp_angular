import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  heroLogo = './assets/logo.png';
//   https://cdn.auth0.com/blog/auth0-angular-sample/assets/logo.png';

  constructor() {}

  ngOnInit(): void {}
}
