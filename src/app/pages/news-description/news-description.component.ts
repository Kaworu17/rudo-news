import { Component, SecurityContext } from '@angular/core';
import { BackendDataService } from '../../services/backend-data.service';
import { TestData } from 'src/app/models/test-data.model';
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
  urlTitle: string | null = '';
  newsDescriptionObject: TestData[] = [];
  newsDescription: TestData = {
    id: 0,
    img: '',
    title: '',
    subtitle: '',
    content: '',
    body: '',
    tags: [],
    date: '',
  };
  newsTitle: string = 'Rock Sanchez3!';

  getUrlTitle() {
    this.urlTitle = this.router.url.replace('/news/', '');
    this.urlTitle = decodeURIComponent(this.urlTitle);
  }

  getNewsDescriptionData() {
    this.backendDataService.getData().subscribe((result) => {
      this.newsDescriptionObject = result.filter(
        (el) => el.title == this.urlTitle
      );
    });

    this.newsDescription = this.newsDescriptionObject[0];
  }
}
