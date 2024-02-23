import { Component } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

import { AuthService } from '../Service/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet, MatMenuModule,MatSidenavModule,MatButtonModule,MatToolbarModule,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public authService: AuthService, public router: Router) {
    this.authService.setUser()
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
