import { Book } from './../service/book';
import { RestapiService } from './../service/restapi.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Input() Book = {
    title: '',
    author: '',
    description: ''
  }

  constructor(
    private service: RestapiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addBook(){
    return this.service.addBook(this.Book).subscribe((data: {})=>{
      this.router.navigateByUrl('/');
    })
  }



}
