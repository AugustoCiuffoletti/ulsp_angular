import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActiveToolService } from "../../../../active-tool.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-close-tool',
  templateUrl: './close-tool.component.html',
  styleUrls: ['./close-tool.component.css']
})
export class CloseToolComponent implements OnInit {
  @Output() toolClosed = new EventEmitter();
  
  constructor( private otool: ActiveToolService  ) { }

  ngOnInit(): void {
  }

  closeTool() {
	this.toolClosed.emit();
	this.otool.changeTool("")
  }

}
