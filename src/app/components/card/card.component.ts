import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NewsData } from 'src/app/models/test-data.model';
import { Network } from 'src/app/services/backend-data.service';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() news: NewsData = {} as NewsData;
  public favorite: boolean = this.news.is_favorite;
  public contentLoaded = false;

  constructor(private network: Network) {}

  isFavorite() {
    this.news.is_favorite = !this.news.is_favorite;

    if (this.news.is_favorite == true) {
      console.log('Favorito: ', this.news.id);
      console.log('isFavorito: ', this.news.is_favorite);

      const httpMethod = 'POST';
      let params = new HttpParams();
      let body = {
        post: this.news.id,
      };
      this.network.call('/api/save-post/', httpMethod, true, params, body);
    } else {
      console.log('DesFavorito');

      const httpMethod = 'DELETE';
      let params = new HttpParams();
      let body = {
        post_id: this.news.id,
      };
      this.network.call(
        `/api/save-post/${this.news.id}/remove/`,
        httpMethod,
        true,
        params,
        body
      );
    }
  }

  clickTag(tag: string) {
    console.log('clicktag: ', tag);

    let element: HTMLElement = document.getElementById(tag) as HTMLElement;
    console.log('element: ', element);

    element?.click();
  }
}
