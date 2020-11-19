import { RestapiService } from './../service/restapi.service';
import { Book } from './../service/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  Books: any = []

  constructor(private service: RestapiService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook(){
    return this.service.getAllbooks().subscribe(data => {
      this.Books = data;
    })
  }

}
