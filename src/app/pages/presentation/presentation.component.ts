import { Component } from '@angular/core';
import { Network } from 'src/app/services/backend-data.service';

@Component({
  selector: 'presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.less'],
})
export class PresentationComponent {
  constructor(private network: Network) {}

  test: any = {};

  public function01() {
    this.network.getData01().subscribe((res) => {
      console.log('Result01', res);
    });
  }

  public function02() {
    this.network.getData02().subscribe((res) => {
      console.log('Result02', res);
    });
  }

  public function03() {
    this.network.getData03().subscribe((res) => {
      console.log('Result03', res);
    });
  }

  public function04() {
    this.network.getData04().subscribe((res) => {
      console.log('Result04', res);
    });
  }

  public function05() {
    this.network.getData05().subscribe((res) => {
      console.log('Result05', res);
    });
  }
}
