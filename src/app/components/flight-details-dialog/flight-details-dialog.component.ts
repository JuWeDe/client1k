import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flight-details-dialog',
  templateUrl: './flight-details-dialog.component.html',
  styleUrls: ['./flight-details-dialog.component.scss']
})
export class FlightDetailsDialogComponent {
hideNotification() {
throw new Error('Method not implemented.');
}
  constructor(
    public dialogRef: MatDialogRef<FlightDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flightInfo: Flight
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
