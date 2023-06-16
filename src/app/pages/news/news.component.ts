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
  separatedTags: string[] = [];
  separatedTagsString: string = this.separatedTags.toString();
  constructor(private backendDataService: BackendDataService) {}

  newsData: TestData[] = [];

  ngOnInit(): void {
    this.searchNews();
    this.getTags(this.separatedTags);
  }

  searchNews() {
    this.backendDataService.getData().subscribe((result) => {
      this.newsData = result;
    });

    this.backendDataService.callDb();
  }

  getSearchNewsText(value: string) {
    this.searchTerm = value;
  }

  getTags(value: string[]) {
    this.separatedTags = value;
    this.separatedTagsString = this.separatedTags.toString();
  }
}
