import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ActiveToolService } from "../../../active-tool.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  @Output() activeTool = new EventEmitter<string>();

  constructor( private otool: ActiveToolService ) { }
  
  tool: string = '';
  
  ngOnInit(): void {
  }

  seleziona(nomeTool: string) {
    this.tool = nomeTool;	
	this.activeTool.emit(nomeTool);
	this.otool.changeTool(nomeTool)
  }
}
