import { Component } from '@angular/core';
import { Task } from '../task.model';

const today = new Date()
@Component({
  selector: 'app-day-planner',
  imports: [],
  templateUrl: './day-planner.component.html',
  styleUrl: './day-planner.component.css'
})
export class DayPlannerComponent {
  tasks: Task[]  = [
    { id: 1, name: 'Meeting with team', time: new Date(new Date().setHours(21)), isDueToday: true, completed: false },
    { id: 2, name: 'Client presentation', time: new Date(new Date().setMinutes(59)), isDueToday: true, completed: false },
    { id: 3, name: 'Project deadline', time: new Date(new Date().setMonth(today.getMonth() + 1)), isDueToday: false, completed: false },
    { id: 4, name: 'Team outing', time: new Date('Sat Apr 20 2024 13:00:00 GMT+0530'), isDueToday: false, completed: true },
    { id: 5, name: 'Software update', time: new Date(), isDueToday: true, completed: false}
  ];
}