import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationPopupComponent } from '../registration-popup/registration-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subsidies',
  templateUrl: './subsidies.component.html',
  styleUrls: ['./subsidies.component.scss']
})
export class SubsidiesComponent {
  isScrolled: boolean = false;
  isDarkMode: boolean = false;
  isHovered: boolean = false;

  constructor(public dialog: MatDialog, private router: Router) {}

  openRegistrationPopup(): void {
    const dialogRef = this.dialog.open(RegistrationPopupComponent, {
      width: 'auto',
    });
  }

  openSubsidiesPage(): void {
    this.router.navigate(['/subsidies']);
  }

  onHeaderMouseEnter() {
    this.isHovered = true;
  }

  onHeaderMouseLeave() {
    this.isHovered = false;
  }
}
