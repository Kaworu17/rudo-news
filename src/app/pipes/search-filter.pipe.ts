import { Pipe, PipeTransform } from '@angular/core';
import { TestData } from '../models/test-data.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    testData: TestData[],
    searchTerm: string,
    selectedTagsString: string
  ): any {
    let selectedTags: string[];

    selectedTags = selectedTagsString.split(',');
    return testData.filter(
      (s) =>
        s.title.toLowerCase().includes(searchTerm) &&
        s.tags.some((r) => selectedTags.includes(r))
    );
  }
}
