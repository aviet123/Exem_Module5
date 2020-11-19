import { Book } from './../service/book';
import { RestapiService } from './../service/restapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

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

}
