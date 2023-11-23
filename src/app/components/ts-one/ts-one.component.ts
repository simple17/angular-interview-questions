import { Component } from '@angular/core';

type GenericType = {
  name: string;
  price: number;
};

type SweetType = GenericType; // Alias
type FillerType = GenericType; // Alias

@Component({
  selector: 'app-ts-one',
  templateUrl: './ts-one.component.html',
  styleUrls: ['./ts-one.component.scss'],
})
export class TsOneComponent {
  sweetsTypes: SweetType[] = [
    { name: 'Cookie', price: 1.2 },
    { name: 'Cake', price: 1.2 },
    { name: 'Pie', price: 1 },
    { name: 'Cheasecake', price: 2.2 },
    { name: 'Croissant', price: 0.5 },
    { name: 'Pancake', price: 0.5 },
    { name: 'Donut', price: 0.7 },
    { name: 'Bagel', price: 0.75 },
    { name: 'Waffle', price: 0.35 },
  ];

  fillers: FillerType[] = [
    { name: 'banana', price: 0.25 },
    { name: 'pear', price: 0.15 },
    { name: 'lemon', price: 0.1 },
    { name: 'blueberry', price: 0.5 },
    { name: 'blackberry', price: 0.5 },
    { name: 'cherry', price: 0.4 },
    { name: 'strawberry', price: 0.55 },
    { name: 'apple', price: 0.15 },
  ];

  sweets: string[] = ['Cookie with lemon $1.20', 'Cookie with banana $2.00'];

  ngOnInit() {
    // Place your code here.
    // this.sweets =
  }
}
