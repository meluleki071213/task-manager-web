import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Task } from 'src/app/models/Task-Model';
import { List } from 'src/app/models/List-Model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskServiceService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
        this.tasks = tasks;
      });
    });

    this.taskService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onTaskClick(task: Task) {
    // we want to set the task to completed
    this.taskService.complete(task).subscribe(() => {
      console.log('Task Completed Successfully.');
      task.completed = !task.completed;
    });
  }
}
