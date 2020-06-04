import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId: string;
  title: string;

  constructor(
    private taskService: TaskServiceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.listId = params[('listId')];
    });
  }

  createNewTask() {
    this.taskService.createTask(this.title, this.listId).subscribe((response: any) => {
      console.log(response);
      // Now we navigate to /lists/response._id
      this.router.navigate(['../'], { relativeTo: this.route});
    });
  }
}
