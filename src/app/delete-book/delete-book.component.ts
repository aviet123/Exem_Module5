import { RestapiService } from './../service/restapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../service/book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id: any = this.actRouter.snapshot.params['id'];
  Book! : Book

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


  deteleBook(){
      this.service.deleteBook(this.id).subscribe(data =>{
        this.Book = data;
        this.router.navigateByUrl("/")
      })
  }

}
