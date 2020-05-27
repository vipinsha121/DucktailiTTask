import { Component, ViewChild,OnInit,Output,EventEmitter} from '@angular/core';

import { TodoTaskService } from '../../services/toDoTask.service';

@Component({
  selector: 'to-do-list',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./style.scss']
})
export class ToDoListComponent  {

  toDoList: any = [];

  constructor(private _taskService:TodoTaskService) { 
    this._taskService.taskCreated$.subscribe(iscreated=> {
       if(iscreated){
         this.toDoList = this._taskService.toDoList;
       }
    })

    this._taskService.undo$.subscribe(undo=> {
      if(undo){
        this.toDoList = this._taskService.toDoList;
      }
   })
  }

  markToDone(i) {
    this._taskService.moveToDoneList(i).subscribe(isMoved=>{
      if(isMoved){
        this._taskService.done(true);
      }
    })
  }

}
