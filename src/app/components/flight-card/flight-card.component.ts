import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';
import { FlightDetailsDialogComponent } from '../flight-details-dialog/flight-details-dialog.component';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {
  constructor(private dialog: MatDialog) { }
  @Input() flight!: Flight;

  openModal() {
    const dialogRef = this.dialog.open(FlightDetailsDialogComponent, {
      width: '400px',
      data: this.flight
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}




