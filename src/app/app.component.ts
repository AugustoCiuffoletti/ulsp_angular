import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActiveToolService } from "./active-tool.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
		
  activeTool:string;
  activeToolObserver: Subscription;
  
  title = 'auth0-angular-sample';
  
  constructor( private tool: ActiveToolService ) { }

  ngOnInit() {
	this.activeToolObserver = this.tool.toolName.subscribe(t => this.activeTool = t)
  }
  
  ngOnDestroy() {
    this.activeToolObserver.unsubscribe();
  }
}
