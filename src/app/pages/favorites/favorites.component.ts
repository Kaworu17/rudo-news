import { Component, OnInit } from '@angular/core';
import { NewsData } from 'src/app/models/test-data.model';
import { BackendDataService } from 'src/app/services/backend-data.service';
import { Network } from '../../services/backend-data.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.less'],
})
export class FavoritesComponent implements OnInit {
  constructor(private network: Network) {}

  newsData: NewsData[] = [];
  nextPage: string = '';

  ngOnInit(): void {
    this.searchNews();
    /* this.getTags(this.separatedTags); */
  }

  async searchNews() {
    console.log('Entra');

    let params = new HttpParams().set('page', '1');
    const httpMethod = 'GET';

    let callResult = await this.network.call(
      '/api/posts/saved/',
      httpMethod,
      true,
      params
    );

    if (callResult != false) {
      let temp: any = callResult;
      this.newsData = temp.results;
    }

    console.log('perrete', this.newsData);
  }
}
