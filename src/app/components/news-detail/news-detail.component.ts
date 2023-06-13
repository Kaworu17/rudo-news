import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestData } from 'src/app/models/test-data.model';
import { getFieldError, isValidFielComprobation } from 'src/app/utils/utils';

@Component({
  selector: 'news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.less'],
})
export class NewsDetailComponent {
  @Input() newsDetail: TestData = {
    id: 0,
    img: '',
    title: '',
    subtitle: '',
    content: '',
    body: '',
    tags: [],
    date: '',
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
