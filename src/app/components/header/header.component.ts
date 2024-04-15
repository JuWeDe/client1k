import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPopupComponent } from '../registration-popup/registration-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(public dialog: MatDialog, private router: Router) {}
  openSubsidiesPage(): void { 
    this.router.navigate(['/subsidies']);
  }
openTest() {
  window.open('https://google.com', '_blank');
}
openRegistrationPopup(): void {
    const dialogRef = this.dialog.open(RegistrationPopupComponent, {
      width: 'auto',
    });
  }
  openRoutesPage(): void {
    this.router.navigate(['/routes']);
  }
  openInfoPage(): void {
    this.router.navigate(['/routes']);
  }  
  ngOnInit(): void {
  }
}
