import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/List-Model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  title: string;

  constructor(
    private taskService: TaskServiceService,
    private router: Router
    ) { }

  ngOnInit() {
  }


  createNewList() {
    this.taskService.createList(this.title).subscribe((list: List) => {
      console.log(list);
      // Now we navigate to /lists/response._id
      this.router.navigate(['/lists', list._id]);
    });
  }
}
