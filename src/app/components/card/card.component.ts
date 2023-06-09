import { Component, Input } from '@angular/core';
import { TestData } from 'src/app/models/test-data.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() news: TestData = {} as TestData;
  public favorite: boolean = false;

  constructor() {}

  isFavorite() {
    this.favorite = !this.favorite;
  }
}
