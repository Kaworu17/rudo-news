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
      body: 'Lorem ipsum dolor sit amet, \n\n consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula.\n\nMalesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla.\n\nSagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum. At et leo a nam. Mattis porttitor integer et scelerisque ut. Odio phasellus pulvinar urna, sed scelerisque maecenas pulvinar. Mauris, elit habitasse massa et dolor id mauris amet, at. Eget sed semper urna tincidunt quam vulputate lorem pretium. Orci metus non tortor massa elementum. Tellus malesuada dictum congue vitae, ornare dis. Eu ut id sagittis a, tortor, purus. Auctor habitasse ipsum viverra gravida sapien sit. A mauris eget eros, ultrices. Interdum pharetra, egestas volutpat amet.',
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
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum. At et leo a nam. Mattis porttitor integer et scelerisque ut. Odio phasellus pulvinar urna, sed scelerisque maecenas pulvinar. Mauris, elit habitasse massa et dolor id mauris amet, at. Eget sed semper urna tincidunt quam vulputate lorem pretium. Orci metus non tortor massa elementum. Tellus malesuada dictum congue vitae, ornare dis. Eu ut id sagittis a, tortor, purus. Auctor habitasse ipsum viverra gravida sapien sit. A mauris eget eros, ultrices. Interdum pharetra, egestas volutpat amet.',
      tags: ['Ocio', 'Cosa2'],
      date: '12-10-2022',
    },
    {
      id: 3,
      img: 'https://rickandmortyapi.com/api/character/avatar/267.jpeg',
      title: 'Rock Sanchez3!',
      subtitle: 'Nueva oficina3',
      content:
        '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa elit, consectetur vitar lorem sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa elit, consectetur vitar lorem sed.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula. Malesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla. Sagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum. At et leo a nam. Mattis porttitor integer et scelerisque ut. Odio phasellus pulvinar urna, sed scelerisque maecenas pulvinar. Mauris, elit habitasse massa et dolor id mauris amet, at. Eget sed semper urna tincidunt quam vulputate lorem pretium. Orci metus non tortor massa elementum. Tellus malesuada dictum congue vitae, ornare dis. Eu ut id sagittis a, tortor, purus. Auctor habitasse ipsum viverra gravida sapien sit. A mauris eget eros, ultrices. Interdum pharetra, egestas volutpat amet.',
      tags: ['Sports', 'Cosa2'],
      date: '12-10-2022',
    },
  ];

  constructor() {}

  public getData(): Observable<TestData[]> {
    return of(this.testData);
  }
}
