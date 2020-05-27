import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateToDoComponent } from './components/createToDo/createToDo.component';
import { ToDoListComponent } from './components/toDoList/toDoList.component';
import { DoneListComponent } from './components/doneList/doneList.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoTaskService } from './services/toDoTask.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateToDoComponent,
    ToDoListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
