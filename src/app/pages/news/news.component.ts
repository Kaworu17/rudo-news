import { Component, HostListener, OnInit } from '@angular/core';
import {
  BackendDataService,
  Network,
} from '../../services/backend-data.service';
import { NewsData, TestData } from 'src/app/models/test-data.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from 'src/app/services/loader.service';

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
  innerWidth: any;
  showLoader!: boolean;

  constructor(
    private backendDataService: BackendDataService,
    private network: Network,
    private http: HttpClient,
    private loaderService: LoaderService
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth - 50;
  }

  ngOnInit(): void {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    //http call starts
    this.loaderService.display(true);

    this.innerWidth = window.innerWidth - 50;
    this.searchNews();
    /* this.getTags(this.separatedTags); */
  }

  async searchNews() {
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

    this.loaderService.display(false);
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
