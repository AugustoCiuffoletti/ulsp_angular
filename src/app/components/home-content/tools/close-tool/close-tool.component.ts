import { Component, OnInit, Output } from '@angular/core';
import { ActiveToolService } from "../../../../active-tool.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-close-tool',
  templateUrl: './close-tool.component.html',
  styleUrls: ['./close-tool.component.css']
})
export class CloseToolComponent implements OnInit {
  
  constructor( private tool: ActiveToolService  ) { }

  ngOnInit(): void {
  }

  closeTool() {
	this.tool.changeTool("")
  }

}
