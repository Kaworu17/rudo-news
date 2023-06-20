import { Component, Input } from '@angular/core';
import { NewsData } from 'src/app/models/test-data.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() news: NewsData = {} as NewsData;
  public favorite: boolean = false;

  constructor() {}

  isFavorite() {
    this.favorite = !this.favorite;
  }
}
