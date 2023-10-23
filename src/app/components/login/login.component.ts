import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { LoginDTO } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage = "";
  model = new LoginDTO();

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.model)
    .pipe(
      catchError((e: HttpErrorResponse) => {
        this.errorMessage = e.error;
        return of(undefined);
      })  
    )
    .subscribe(loggedUser => {
      if (loggedUser) {
        this.authService.setLoggedUser(loggedUser);
        console.log(loggedUser);
        this.router.navigate(['/', 'news']);
      }
    })
  }
}
