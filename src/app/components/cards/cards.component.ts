import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  items = [
    { title: 'Spring Boot / Angular', price: '350 DT/ Month', image: 'assets/images/image5.png' },
    { title: 'Node JS / React', price: '350 DT/ Month', image: 'assets/images/image2.png' },
    { title: 'Flutter / Firebase', price: '350 DT/ Month', image: 'assets/images/image4.png' },
    { title: 'Business Intelligence', price: '350 DT/ Month', image: 'assets/images/image1.png' },
    { title: 'Intelligence Intelligence', price: '350 DT/ Month', image: 'assets/images/image6.png' },
    { title: 'Devops', price: '350 DT/ Month', image: 'assets/images/image3.png' }
  ];
}
