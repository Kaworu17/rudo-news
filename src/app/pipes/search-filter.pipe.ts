import { Pipe, PipeTransform } from '@angular/core';
import { NewsData, TestData } from '../models/test-data.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    testData: NewsData[],
    searchTerm: string,
    selectedTagsString: string
  ): any {
    let selectedTags: string[];

    selectedTags = selectedTagsString.split(',');
    let data = testData.filter(
      (s) =>
        s.title.toLowerCase().includes(searchTerm) &&
        selectedTags.includes(s.category.name)
    );

    return data;
  }
}
