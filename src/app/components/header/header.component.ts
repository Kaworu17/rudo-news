import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  @Input()
  expanded: boolean = false;

  constructor() {
    /* console.log('es Expandido?', this.expanded); */
  }
}
