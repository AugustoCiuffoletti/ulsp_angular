import { Component, Output, OnInit, OnDestroy } from '@angular/core';
import { ActiveToolService } from "../../../active-tool.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor( private tool: ActiveToolService ) { }
  
  activeTool: string;
  activeToolObserver: Subscription;

  ngOnInit() {
	this.activeToolObserver = this.tool.toolName.subscribe(t => this.activeTool = t)
  }
  
  ngOnDestroy() {
    this.activeToolObserver.unsubscribe();
  }

  seleziona(nomeTool: string) {
	this.tool.changeTool(nomeTool)
  }
}
