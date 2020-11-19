import { RestapiService } from './../service/restapi.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id: any = this.actRouter.snapshot.params['id'];
  Book!: Book;

  constructor(
    private service: RestapiService,
    private actRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getBookById(this.id).subscribe((data => {
      this.Book = data;
    }))
  }

  updateBook(){
    return this.service.updateBook(this.id,this.Book).subscribe((data)=>{
      this.Book = data;
      this.router.navigateByUrl('/');
    })
  }

}
