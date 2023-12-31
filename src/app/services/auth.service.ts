import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedUser, LoginDTO } from '../models/auth';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_Url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  login(model: LoginDTO) : Observable<LoggedUser> {
    return this.http.post<LoggedUser>(this.base_Url + "/login", model)
    .pipe(
      tap({next: (loggedUser: LoggedUser) => {
        console.log(loggedUser);
        this.setLoggedUser(loggedUser)
        }
      })
    );
  }

  private setLoggedUser(loggedUser: LoggedUser) : void {
    localStorage.setItem("user", JSON.stringify(loggedUser));
  }

  getLoggedUser() : LoggedUser | null {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      return JSON.parse(loggedUser);
    }
    return null;
  }

  get isUserLogged(): boolean {
    return this.getLoggedUser() != null;
  }

  deleteUser(): void {
    localStorage.removeItem("user");
  }
}


