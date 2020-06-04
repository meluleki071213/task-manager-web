import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private webRequestService: WebRequestService) { }

  createList(title: string) {
    // We want to send a web request to create a list
    return this.webRequestService.post('/lists', { title });
  }

  getLists() {
    // We want to send a web request to get available lists
    return this.webRequestService.get('/lists');
  }

  getTasks(listId: string) {
    return this.webRequestService.get(`/lists/${listId}/tasks`);
  }
}
