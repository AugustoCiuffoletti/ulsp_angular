import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
	this.authService.user$.subscribe((data) => {
      if (data) {
		console.log(JSON.stringify(data));
		console.log(typeof(data));
        this.profile = { ...data };
        document.getElementById("profile").innerHTML = JSON.stringify(this.profile);
      }
    });
  }
}
