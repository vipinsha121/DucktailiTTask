import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { TodoTaskService } from '../../services/toDoTask.service';

@Component({
  selector: 'done-list',
  templateUrl: './doneList.component.html'
})
export class DoneListComponent {

  doneList: any = [];

  constructor(private _taskService:TodoTaskService) { 
    this._taskService.done$.subscribe(done=> {
       if(done){
         this.doneList = this._taskService.doneList;
       }
    })
  }

  markToUndo(i) {
    this._taskService.moveToOriginalList(i).subscribe(isMoved=>{
      if(isMoved){
        this._taskService.undo(true);
      }
    })
  }
}
