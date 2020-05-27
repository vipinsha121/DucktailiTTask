import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {

  toDoList : any[] = [];
  doneList : any[] = [];

  constructor() { }

  createTask(task): Observable<boolean> {
    let undefinedIndex = this.toDoList.indexOf(undefined)
    if(undefinedIndex > -1){
      this.toDoList.splice(undefinedIndex, 1);
    }
    this.toDoList.push(task);
    return of(true);
  }

  moveToDoneList(i): Observable<boolean> {
      this.doneList.push(this.toDoList[i])
      this.toDoList[i] = null;
      let nullIndex = this.toDoList.indexOf(null)
      if(nullIndex > -1){
        this.toDoList.splice(nullIndex, 1);
      }
      return of(true)
  }

  moveToOriginalList(i): Observable<boolean> {
    this.toDoList.push(this.doneList[i])
    this.doneList[i] = null;
    let nullIndex = this.doneList.indexOf(null)
    if(nullIndex > -1){
      this.doneList.splice(nullIndex, 1);
    }
    return of(true)
}


  //task created
  private taskCreatedSource = new Subject<boolean>();
  public taskCreated$ = this.taskCreatedSource.asObservable();
  taskCreated(data: boolean) {
      this.taskCreatedSource.next(data);
  }
  
  //mark task to done
  private doneSource = new Subject<boolean>();
  public done$ = this.doneSource.asObservable();
  done(data: boolean) {
      this.doneSource.next(data);
  }

  //undo
  private undoSource = new Subject<boolean>();
  public undo$ = this.undoSource.asObservable();
  undo(data: boolean) {
      this.undoSource.next(data);
  }
}
