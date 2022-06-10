import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';
import { ActiveToolService } from "../../active-tool.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
})
export class HomeContentComponent implements OnInit {
  faLink = faLink;
  activeTool:string;
  activeToolObserver: Subscription;


  constructor( public auth: AuthService, private tool: ActiveToolService ) {}

  ngOnInit(): void {
	this.activeToolObserver = this.tool.toolName.subscribe(t => this.activeTool = t)
  }
}
