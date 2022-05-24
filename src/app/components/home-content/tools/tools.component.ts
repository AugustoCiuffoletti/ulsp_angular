import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  constructor() { }
  
  tool: string = '';
  
  ngOnInit(): void {
  }

  seleziona(nomeTool: string) {
    this.tool = nomeTool;
  }
}
