import { Component, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.scss'
})
export class FlightCardComponent {
openModal() {
throw new Error('Method not implemented.');
}
  @Input() flight: Flight | undefined; 

}
