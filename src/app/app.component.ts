import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  products: Product[] = [
    {
      title: 'Product 1',
      description: 'Some description about product 1',
      image: './assets/images/pepePunch.png'
    }
    ,
    {
      title: 'Product 2',
      description: 'Some description about product 2',
      image: './assets/images/pepePunch.png'
    },
    {
      title: 'Product 3',
      description: 'Some description about product 3',
      image: './assets/images/basedPepe.png'
    }
  ];
  title: any;
}
interface Product {
  title: string;
  description: string;
  image: string;
}

