
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book List';
  books;
  providers: [HttpClient]
 
  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/books.json')
      .subscribe(res => this.books = res);
  }
}