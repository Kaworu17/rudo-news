import { Component, Input, OnInit } from '@angular/core';
import {
  BackendDataService,
  Network,
} from '../../services/backend-data.service';
import { NewsData, TestData } from 'src/app/models/test-data.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  searchTerm: string = '';
  separatedTags: string[] = [];
  separatedTagsString: string = this.separatedTags.toString();
  newsData: NewsData[] = [];
  nextPage: string = '';

  constructor(
    private backendDataService: BackendDataService,
    private network: Network,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.searchNews();
    /* this.getTags(this.separatedTags); */
  }

  async searchNews() {
    console.log('Entra');
    /* this.backendDataService.getDataFromRudoBack().subscribe((res) => {
      this.nextPage = res.next;
      this.newsData = res.results;
      console.log('res', res);
    }); */

    let params = new HttpParams().set('page', '1');
    const httpMethod = 'GET';

    let callResult = await this.network.call(
      '/api/posts/?title=asd&page=1/',
      httpMethod,
      true,
      params
    );

    if (callResult != false) {
      let temp: any = callResult;
      this.newsData = temp.results;
    }
  }

  getSearchNewsText(value: string) {
    this.searchTerm = value;
  }

  getTags(value: string[]) {
    console.log('getTags Value: ', value);
    this.separatedTags = value;
    this.separatedTagsString = this.separatedTags.toString();
  }
}
