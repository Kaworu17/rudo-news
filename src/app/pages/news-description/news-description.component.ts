import { Component, SecurityContext } from '@angular/core';
import { BackendDataService } from '../../services/backend-data.service';
import {
  NewsData,
  NewsDataObject,
  TestData,
} from 'src/app/models/test-data.model';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'news-description',
  templateUrl: './news-description.component.html',
  styleUrls: ['./news-description.component.less'],
})
export class NewsDescriptionComponent {
  constructor(
    private backendDataService: BackendDataService,
    private router: Router,
    private _sanitizer: DomSanitizer
  ) {
    this.getUrlTitle();
    this.getNewsDescriptionData();
  }
  urlTitle: string = '';
  newsDescription: NewsData = {
    id: 0,
    image: '',
    title: '',
    subtitle: '',
    short_description: '',
    creation_date: '',
    category: {
      id: 0,
      name: '',
    },
    is_favorite: false,
  };
  newsTitle: string = 'Rock Sanchez3!';

  getUrlTitle() {
    this.urlTitle = this.router.url.replace('/news/', '');
    this.urlTitle = decodeURIComponent(this.urlTitle);
  }

  getNewsDescriptionData() {
    this.backendDataService.getPost(this.urlTitle).subscribe((result) => {
      console.log('post:', result);

      this.newsDescription = result;
    });
  }
}
