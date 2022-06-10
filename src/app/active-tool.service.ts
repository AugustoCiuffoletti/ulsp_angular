import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActiveToolService {

  private source = new BehaviorSubject<any>("");
  toolName = this.source.asObservable();

  constructor() { }
  
  changeTool(toolName: string) {
	console.log(toolName);
    this.source.next(toolName);
  }

}
