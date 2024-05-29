import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPopupComponent } from '../registration-popup/registration-popup.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  redirectToHome() {
    this.router.navigateByUrl('/');
  }
  ngOnInit(): void {
    this.checkLoginStatus();
  }
  openSubsidiesPage(): void {
    this.router.navigate(['/subsidies']);
  }
  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  openRoutesPage(): void {
    this.router.navigate(['/routes']);
  }
  openInfoPage(): void {
    this.router.navigate(['/references']);
  }







  isLoggedIn: boolean = false;
  constructor(public dialog: MatDialog, private authService: AuthService, private router: Router) {
    this.checkLoginStatus();
  }
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }
  openRegistrationPopup(): void {
    const dialogRef = this.dialog.open(RegistrationPopupComponent, {
      width: 'auto',
    });
  }
  openSignUp() {
  }
  openLogIn() {
  }
  openTest() {
    window.open('https://google.com', '_blank');
  }
}


