import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { loggedGuard } from './guards/logged.guard';

const routes: Routes = [
  {
    path:"", 
    redirectTo:"/home", pathMatch:"full"
  },
  {
    path:"home", 
    component: HomeComponent
  },
  {
    path:"news", 
    component: NewsComponent,
    canActivate: [loggedGuard]
  },
  {
    path:"login", 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
