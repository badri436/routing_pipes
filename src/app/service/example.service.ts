import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private http: HttpClient) {}

  getPost(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  getExample() {
    console.log('im calling from any component');
  }
}
