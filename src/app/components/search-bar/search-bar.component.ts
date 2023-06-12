import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BackendDataService } from '../../services/backend-data.service';
import { TestData } from '../../models/test-data.model';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() newTagsEvent = new EventEmitter<string[]>();
  searchTerm: string = '';
  newsData: string[] = [];
  separatedTags: string[] = [];
  selectedTags: string[] = [];
  buttonTags: string[] = [];
  private toggle: boolean = false;
  private isflipped: boolean = false;

  constructor(private backendDataService: BackendDataService) {
    this.getTags();
  }
  ngOnInit(): void {
    this.sendSelectedTags(this.separatedTags);
  }

  searchNewsText(value: string) {
    this.newItemEvent.emit(value.toLowerCase());
    console.log('valor: ', value);
  }

  sendSelectedTags(value: string[]) {
    this.newTagsEvent.emit(value);
    console.log('valorTagsEmit: ', value);
  }

  /* getTags() {
    this.backendDataService.getData().subscribe((result) => {
      this.newsData = result.map((element) => {
        return `${element.tags}`;
      });
      console.log('tagssa: ', this.newsData);
      //juntar todo en un string
      console.log('tags: ', this.newsData.toString());

      let stringData = this.newsData.toString();

      //separar por comas
      let stringSeparatedData = stringData.split(',');
      console.log('stringSeparatedData', stringSeparatedData);

      //remover duplicados
      let separatedTags = stringSeparatedData.filter((element, index) => {
        return stringSeparatedData.indexOf(element) === index;
      });

      console.log('unique chars: ', separatedTags);
    });
  } */

  getTags() {
    this.backendDataService.getData().subscribe((result) => {
      this.newsData = result.map((element) => {
        return `${element.tags}`;
      });

      let temporalArray;
      let newArray: string[] = [];

      this.newsData.forEach((element) => {
        temporalArray = element.split(',');
        newArray.push(...temporalArray);
      });

      //remover duplicados
      this.separatedTags = newArray.filter((element, index) => {
        return newArray.indexOf(element) === index;
      });

      console.log('sinduplicados', this.separatedTags);
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
      this.sendSelectedTags(this.separatedTags);
    }
  }
}
