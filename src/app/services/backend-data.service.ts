import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestData } from '../models/test-data.model';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa elit, consectetur vitar lorem sed.`,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, tristique duis sagittis at lacus, gravida neque, dictumst. Tellus bibendum augue lacinia ligula.\n\nMalesuada aliquet molestie commodo quisque pellentesque. Diam tempor amet ornare amet lobortis enim. Augue dui vitae et, porta nulla.\n\nSagittis urna sit scelerisque morbi in. Amet sed eu, blandit eget vitae, viverra vel. Amet, penatibus lorem ac dignissim donec enim. Mi diam velit commodo mattis ipsum. Cras ultricies nisl enim elit nulla tempus, sed dictumst. Viverra ultricies egestas potenti quam felis. Eu mus a amet urna condimentum. At et leo a nam. Mattis porttitor integer et scelerisque ut. Odio phasellus pulvinar urna, sed scelerisque maecenas pulvinar. Mauris, elit habitasse massa et dolor id mauris amet, at. Eget sed semper urna tincidunt quam vulputate lorem pretium. Orci metus non tortor massa elementum. Tellus malesuada dictum congue vitae, ornare dis. Eu ut id sagittis a, tortor, purus. Auctor habitasse ipsum viverra gravida sapien sit. A mauris eget eros, ultrices. Interdum pharetra, egestas volutpat amet.',
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
      title: 'Mariposa amazónica',
      subtitle: 'Nueva especie de mariposa.',
      content: 'Encuentran nueva especie de mariposa en la selva amazónica.',
      body: 'En un emocionante hallazgo, científicos han descubierto una nueva especie de mariposa en lo profundo de la selva amazónica. El insecto, llamado "Morpho amazónica", ha capturado la atención de los investigadores con su brillante color azul iridiscente y su elegante vuelo.\n\nEl descubrimiento de esta mariposa única se realizó durante una expedición científica en la región, donde los expertos estaban investigando la biodiversidad de la selva tropical. La belleza y singularidad de la Morpho amazónica dejó perplejos a los científicos, quienes describen a esta especie como un tesoro escondido en el corazón de la selva.\n\n"La Morpho amazónica es verdaderamente asombrosa. Su color azul brillante y su patrón de alas cautivan a cualquiera que tenga la suerte de observarla en su hábitat natural", comentó la Dra. Marta Rodríguez, líder del equipo de investigación. "Este descubrimiento subraya la importancia de proteger y preservar nuestros ecosistemas naturales, ya que aún pueden albergar sorpresas fascinantes como esta mariposa".\n\nLa nueva especie de mariposa se caracteriza por su envergadura, que puede alcanzar los 15 centímetros de ancho. Además, los científicos han observado un comportamiento único en la Morpho amazónica: durante la época de apareamiento, los machos realizan elaboradas danzas en el aire para atraer a las hembras.\n\nSi bien este hallazgo es emocionante, los expertos advierten sobre la importancia de proteger el hábitat de la Morpho amazónica y de otras especies en peligro en la selva amazónica. La deforestación y la actividad humana amenazan constantemente la biodiversidad de esta región única en el mundo.\n\nEste descubrimiento destaca la necesidad de continuar apoyando la investigación científica y los esfuerzos de conservación para comprender y preservar la asombrosa diversidad de nuestro planeta. La Morpho amazónica es un recordatorio de que aún hay mucho por descubrir en los rincones más remotos de nuestro mundo natural.',
      tags: ['Sports', 'Cosa2'],
      date: '12-10-2022',
    },
  ];

  constructor(private db: AngularFireDatabase) {}

  public getData(): Observable<TestData[]> {
    return of(this.testData);
  }
}
