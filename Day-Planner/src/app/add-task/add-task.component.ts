import { Component } from '@angular/core';
import { TaskDateInputComponent } from '../task-date-input/task-date-input.component';
import { TaskNameInputComponent } from '../task-name-input/task-name-input.component';

@Component({
  selector: 'app-add-task',
  templateUrl: '../add-task/add-task.component.html',
  imports: [TaskDateInputComponent, TaskNameInputComponent]
})
export class AddTaskComponent {
}