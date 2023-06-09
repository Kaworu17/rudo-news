import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  searchTerm: string = '';

  searchNewsText(value: string) {
    this.newItemEvent.emit(value.toLowerCase());
    console.log('valor: ', value);
  }
}
