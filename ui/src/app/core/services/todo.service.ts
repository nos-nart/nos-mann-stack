import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = `${environment.API_URL}/todos`;

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<Todo[]>(this.url);
  }
}
