import { HttpParams } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comments, NewsData } from 'src/app/models/test-data.model';
import { Network } from 'src/app/services/backend-data.service';
import { getFieldError, isValidFielComprobation } from 'src/app/utils/utils';

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less'],
})
export class NewsDetailComponent implements OnChanges {
  constructor(private network: Network) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newsDetail'] && !changes['newsDetail'].firstChange) {
      this.getComments();
    }
  }

  @Input() newsDetail: NewsData = {
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

  public isValidFielComprobation = isValidFielComprobation;
  public getFieldError = getFieldError;
  public commentForm: FormGroup = new FormGroup({
    comment: new FormControl('', [
      Validators.maxLength(250),
      Validators.minLength(1),
    ]),
  });

  public isShowSend: boolean = false;
  public comments!: Comments;

  async onComment(): Promise<void> {
    if (
      this.commentForm.valid &&
      this.commentForm.get('comment')?.value != ''
    ) {
      /* console.log(this.commentForm.value);
      console.log(this.commentForm.get('comment')?.value);
      console.log('noticia id:', this.newsDetail.id); */

      const httpMethod = 'POST';
      let params = new HttpParams();
      let body = { text: this.commentForm.get('comment')?.value };

      await this.network.call(
        `/api/posts/${this.newsDetail.id}/create_comment/`,
        httpMethod,
        true,
        params,
        body
      );

      await this.getComments();
    } else {
      this.commentForm.markAllAsTouched();
    }
  }

  toggleShowSend(): void {
    if (this.isShowSend) this.isShowSend = !this.isShowSend;
  }

  async getComments() {
    const httpMethod = 'GET';
    let response = await this.network.call(
      `/api/posts/${this.newsDetail.id}/comments/`,
      httpMethod,
      false
    );

    if (response !== false) {
      this.comments = response as Comments;
      console.log('comments response', this.comments);
    }
  }
}
