import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;
  tool: string;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
	this.tool = '';  
  }
  
  setTool(t) {
	this.tool=t;
  }
}
