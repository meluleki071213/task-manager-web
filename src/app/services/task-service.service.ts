import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from '../models/Task-Model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webRequestService: WebRequestService) { }

  getLists() {
    // We want to send a web request to get available lists
    return this.webRequestService.get('/lists');
  }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webRequestService.post('/lists', { title });
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`/lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    // We want to send a web request to create a task
    return this.webRequestService.post(`/lists/${listId}/tasks`, { title });
  }

  complete(task: Task) {
    return this.webRequestService.patch(`/lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
