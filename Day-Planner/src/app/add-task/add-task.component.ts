import { Component } from '@angular/core';
import { TaskDateInputComponent } from '../task-date-input';
import { TaskNameInputComponent } from '../task-name-input';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  imports: [TaskDateInputComponent, TaskNameInputComponent]
})
export class AddTaskComponent {
}