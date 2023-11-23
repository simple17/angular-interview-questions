import { Component } from '@angular/core';
import { Teaser } from 'src/app/interfaces/Teaser';

@Component({
  selector: 'app-scss-one',
  templateUrl: './scss-one.component.html',
  styleUrls: ['./scss-one.component.scss'],
})
export class ScssOneComponent {
  teaser: Teaser = {
    title: 'Tox Tuesday: Fingernail drug testing',
    date: new Date(),
    label: 'blog',
    labelBg: 'green',
    backgroundImage:
      'https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-sunlight.jpg?w=585&scale=down',
    link: '#1',
  };
}
