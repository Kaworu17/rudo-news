import { Component, Input, OnInit } from '@angular/core';
import { BackendDataService } from '../../services/backend-data.service';
import { TestData } from 'src/app/models/test-data.model';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  searchTerm: string = '';
  constructor(private backendDataService: BackendDataService) {}

  newsData: TestData[] = [];

  ngOnInit(): void {
    this.searchNews();
  }

  searchNews() {
    this.backendDataService.getData().subscribe((result) => {
      this.newsData = result;
    });
  }

  getSearchNewsText(value: string) {
    console.log('padre text:', value);
    this.searchTerm = value;
  }
}
