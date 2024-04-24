import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
   [x: string]: any;
   
   searchForm: FormGroup;

   constructor(private fb: FormBuilder) {
     this.searchForm = this.fb.group({
       from: [''], // Откуда
       to: [''], // Куда
       date: [''], // Когда
       adultPassengers: [0], // Взрослых
       childPassengers: [0] // Детей
     });
   }
 
   ngOnInit(): void {
   }
 
   onSubmit() {
     console.log(this.searchForm.value);
     // Здесь вы можете добавить логику отправки данных формы на сервер или другую необходимую обработку
   }
  }
