import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {path: "home",component: HomeComponent},
  {path: "app-add-book", component: AddBookComponent},
  {path: "app-update-book", component: UpdateBookComponent },
  {path: "books", component: BooksComponent},
  {path:"register", component: RegisterComponent },
  {path: "profile", component: ProfileComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
