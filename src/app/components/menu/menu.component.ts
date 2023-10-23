import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.deleteUser();
    this.router.navigate(['/']);
  }

}
