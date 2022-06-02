import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent implements OnInit {
  heroLogo = './assets/logo.png';
//   https://cdn.auth0.com/blog/auth0-angular-sample/assets/logo.png';

  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
