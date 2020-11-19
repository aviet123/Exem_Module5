import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DetailsBookComponent } from './details-book/details-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBookComponent } from './list-book/list-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
  pathMatch: 'full', 
  redirectTo: 'book-list' 
  },
  {
    path: 'book-list',
    component: ListBookComponent
  },
  {
    path: 'create-book',
    component: AddBookComponent
  },
  {
    path: 'details-book/:id',
    component: DetailsBookComponent
  },
  {
    path: 'delete-book/:id',
    component: DeleteBookComponent
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
