import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BackendDataService } from '../../services/backend-data.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newTagsEvent = new EventEmitter<string[]>();

  searchTerm: string = '';
  tags: string[] = [];
  selectedTags: string[] = [];
  buttonTags: string[] = [];
  private toggle: boolean = false;
  private isflipped: boolean = false;

  constructor(private backendDataService: BackendDataService) {}
  ngOnInit(): void {
    this.sendSelectedTags(this.tags);
    this.getTags();
  }

  searchNewsText(value: string) {
    this.newItemEvent.emit(value.toLowerCase());
    console.log('valor: ', value);
  }

  sendSelectedTags(value: string[]) {
    this.newTagsEvent.emit(value);
    console.log('valorTagsEmit: ', value);
  }

  getTags() {
    this.backendDataService.getListCategories().subscribe((result) => {
      this.tags = result.results!.map((element: { name: any }) => {
        return `${element.name}`;
      });

      this.sendSelectedTags(this.tags);
    });
  }

  buttonStates: { [key: string]: boolean } = {};

  isButtonActive(tag: string) {
    if (this.buttonStates[tag] !== undefined) {
      this.buttonStates[tag] = !this.buttonStates[tag];
    } else {
      this.buttonStates[tag] = true;
    }

    this.addRemoveTags(tag, this.buttonStates[tag]);
  }

  addRemoveTags(tag: string, active: boolean) {
    if (!this.selectedTags.length) {
      this.selectedTags.push(tag);
      this.sendSelectedTags(this.selectedTags);
    } else {
      if (active) {
        this.selectedTags.push(tag);
        this.sendSelectedTags(this.selectedTags);
      } else {
        this.selectedTags = this.selectedTags.filter((item) => item !== tag);
        this.sendSelectedTags(this.selectedTags);
        this.isEmptyTags(this.selectedTags);
      }
    }
  }

  isEmptyTags(tags: string[]) {
    if (!this.selectedTags.length) {
      console.log('Vacío', this.tags);
      this.sendSelectedTags(this.tags);
    }
  }
}
