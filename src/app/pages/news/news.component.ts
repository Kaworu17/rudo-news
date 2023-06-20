import { Component, Input, OnInit } from '@angular/core';
import { BackendDataService } from '../../services/backend-data.service';
import { NewsData, TestData } from 'src/app/models/test-data.model';
import { HttpClient } from '@angular/common/http';
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
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.searchNews();
    /* this.getTags(this.separatedTags); */
  }

  searchNews() {
    this.backendDataService.getDataFromRudoBack().subscribe((res) => {
      this.nextPage = res.next;
      this.newsData = res.results;
      console.log('res', res);
    });
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
