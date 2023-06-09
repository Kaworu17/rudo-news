import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestData } from '../models/test-data.model';

@Injectable({
  providedIn: 'root',
})
export class BackendDataService {
  testData: TestData[] = [
    {
      id: 1,
      img: 'https://rickandmortyapi.com/api/character/avatar/265.jpeg',
      title: 'Rick Sanchez!',
      subtitle: 'Nueva oficina',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa elit, consectetur vitar lorem sed.',
      tags: ['Ocio', 'Cosa'],
      date: '11-9-2022',
    },
    {
      id: 2,
      img: 'https://rickandmortyapi.com/api/character/avatar/264.jpeg',
      title: 'Rock Sanchez2!',
      subtitle: 'Nueva oficina2',
      content:
        '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa elit, consectetur vitar lorem sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa elit, consectetur vitar lorem sed.',
      tags: ['Ocio', 'Cosa2'],
      date: '12-10-2022',
    },
  ];

  constructor() {}

  public getData(): Observable<TestData[]> {
    return of(this.testData);
  }
}
