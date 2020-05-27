import { Component, OnInit} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

import { TodoTaskService } from '../../services/toDoTask.service';

@Component({
  selector: 'create-to-do',
  templateUrl: './createToDo.component.html',
  styleUrls: ['./style.scss']
})
export class CreateToDoComponent implements OnInit {
  taskForm: FormGroup;
  submitted: boolean = false;
  newTask: boolean = false;
  constructor( private formBuilder: FormBuilder,
    private _taskService:TodoTaskService) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskName:new FormControl("", [Validators.required]),
      taskDescription: new FormControl("",Validators.compose([Validators.required, Validators.maxLength(250)])),
      repeatingTask: new FormControl("", [Validators.required])
    });
  }
  onSubmit(){
    this.submitted = true;
    if(this.submitted && this.taskForm.valid){
      this._taskService.createTask(this.taskForm.value).subscribe((isCreated)=>{
        if(isCreated){
          this._taskService.taskCreated(true);
          this.taskForm.reset();
          this.submitted = false;
        }
      });
    }
  }
}
