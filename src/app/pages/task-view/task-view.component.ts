import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any[];
  tasks: any[];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskServiceService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.taskService.getTasks(params.listId).subscribe((tasks: any[]) => {
        this.tasks = tasks;
      });
    });

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    });
  }
}