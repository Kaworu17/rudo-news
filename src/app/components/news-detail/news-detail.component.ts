import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsData } from 'src/app/models/test-data.model';
import { getFieldError, isValidFielComprobation } from 'src/app/utils/utils';

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less'],
})
export class NewsDetailComponent {
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

  onComment(): void {
    if (
      this.commentForm.valid &&
      this.commentForm.get('comment')?.value != ''
    ) {
      console.log(this.commentForm.value);
    } else {
      this.commentForm.markAllAsTouched();
    }
  }

  toggleShowSend(): void {
    if (this.isShowSend) this.isShowSend = !this.isShowSend;
  }
}
