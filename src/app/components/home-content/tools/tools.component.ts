import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  @Output() activeTool = new EventEmitter<string>();

  constructor() { }
  
  tool: string = '';
  
  ngOnInit(): void {
  }

  seleziona(nomeTool: string) {
    this.tool = nomeTool;	
	this.activeTool.emit(nomeTool);
  }
}
