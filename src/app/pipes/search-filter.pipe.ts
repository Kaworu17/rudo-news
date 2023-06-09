import { Pipe, PipeTransform } from '@angular/core';
import { TestData } from '../models/test-data.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(testData: TestData[], searchTerm: string): any {
    return testData.filter((s) => s.title.toLowerCase().includes(searchTerm));
  }
}
