import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-tool',
  templateUrl: './close-tool.component.html',
  styleUrls: ['./close-tool.component.css']
})
export class CloseToolComponent implements OnInit {
  @Output() toolClosed = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  closeTool() {
	this.toolClosed.emit();
  }

}
