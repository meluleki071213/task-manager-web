import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  title: string;

  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
  }


  createNewList() {
    this.taskService.createList(this.title).subscribe((response: any) => {
      console.log(response);
      // Now we navigate to /lists/response._id
    });
  }
}
