import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, of } from 'rxjs';
import {
  AuthToken,
  CategoryObject,
  GetAuthToken,
  NewsData,
  NewsDataObject,
  TestData,
} from '../models/test-data.model';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

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

  constructor(private http: HttpClient) {}

  public server: string = 'https://academy.rudo.es/';

  public getData(): Observable<TestData[]> {
    return of(this.testData);
  }

  public getDataFromRudoBack(page?: string): Observable<NewsDataObject> {
    return this.http.get<NewsDataObject>(
      `${this.server}posts/?title=asd&page=1`
    );
  }

  public getListCategories(): Observable<CategoryObject> {
    return this.http.get<CategoryObject>(`${this.server}categories/`);
  }

  public getPost(id: string): Observable<NewsData> {
    return this.http.get<NewsData>(`${this.server}posts/${id}`);
  }
}

@Injectable({
  providedIn: 'root',
})
export class Network {
  constructor(private http: HttpClient, private router: Router) {}

  server: string = 'https://academy.rudo.es/';
  urlAddress = environment.urlAddress;
  data: GetAuthToken = {
    access_token: '',
    expires_in: 0,
    token_type: '',
    scope: '',
    refresh_token: '',
  };

  public save(tokens: AuthToken) {
    for (var key in tokens) {
      localStorage.setItem(key, tokens[key].toString());
    }

    //coger expires_in y calcular la fecha en la que va a expirar
    let finishTime = this.calculateValidUntil();
    localStorage.setItem('finishTime', finishTime.getTime().toString());
  }

  public calculateValidUntil(): Date {
    let expiredSeconds = Number(localStorage.getItem('expires_in'));
    let actualTime = new Date();

    function addMinutes(date: Date, seconds: number) {
      return new Date(date.getTime() + seconds * 1000);
    }

    return addMinutes(actualTime, expiredSeconds);
  }

  public getTokens(): GetAuthToken {
    this.data = {
      access_token: localStorage.getItem('access_token'),
      expires_in: Number(localStorage.getItem('expires_in')),
      token_type: localStorage.getItem('token_type'),
      scope: localStorage.getItem('scope'),
      refresh_token: localStorage.getItem('refresh_token'),
    };

    /* console.log('Res de getTokens: ', this.data); */

    return this.data;
  }

  public async getCurrentToken(): Promise<String | null> {
    let token = this.getTokens();
    let finishTime = Number(localStorage.getItem('finishTime'));

    /* console.log('Tiempo actual', new Date().getTime());
    console.log('Tiempo final', finishTime);
    console.log(
      'Es tiempo final mayor que tiempo actual?',
      finishTime > new Date().getTime()
    ); */

    if (finishTime > new Date().getTime()) {
      console.log('Queda tiempo, access_token:', token?.access_token);

      return token?.access_token;
    } else {
      if (token?.refresh_token) {
        console.log('timeout, devuelve refresh token', token?.refresh_token);
        let refreshedToken = await this.refreshToken();
        return refreshedToken;
      } else {
        //login
        console.log('no hay refres token, enviar al login');
        this.router.navigate(['/login']);
        return null;
      }
    }
  }

  /* public authToken(user: string, pass: string) {
    let callData = {
      grant_type: 'password',
      username: user,
      password: pass,
      client_id: 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0',
      client_secret:
        'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u',
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http
      .post<AuthToken>(`/api/auth/token`, callData, { headers: headers })
      .subscribe({
        next: (response: AuthToken) => {
          console.log('auth de authToken: ', response);
          this.save(response);
          return true;
        },
        error: (error: any) => {
          console.error('Error:', error);
          return false;
        },
        complete: () => {
          console.log('Complete');
        },
      });
  } */

  /* public async authToken(user: string, pass: string): Promise<any> {
    let callData = {
      grant_type: 'password',
      username: user,
      password: pass,
      client_id: 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0',
      client_secret:
        'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u',
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    try {
      console.log('calldata', callData);
      let response = await lastValueFrom(
        this.http.post<AuthToken>(`/api/auth/token`, callData, {
          headers: headers,
        })
      );
      console.log('auth de authToken: ', response);
      this.save(response);
      return response;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  } */

  public async authToken(user: string, pass: string) {
    let callData = {
      grant_type: 'password',
      username: user,
      password: pass,
      client_id: 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0',
      client_secret:
        'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u',
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return lastValueFrom(
      this.http.post<AuthToken>(`${this.urlAddress}auth/token`, callData, {
        headers: headers,
      })
    )
      .then((response) => {
        this.save(response);
        return true;
      })
      .catch((error) => {
        console.error('Error:', error);
        return false;
      });
  }

  public async refreshToken(): Promise<string | null> {
    let callData = {
      grant_type: 'refresh_token',
      client_id: 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0',
      client_secret:
        'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u',
      refresh_token: this.data.refresh_token,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    try {
      const response: AuthToken = await lastValueFrom(
        this.http.post<AuthToken>(`${this.urlAddress}auth/token`, callData, {
          headers,
        })
      );

      console.log('auth de refreshToken: ', response);
      this.save(response);

      return response.access_token;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  public async call(
    url: string,
    method: string,
    isHeaders?: boolean,
    params?: HttpParams,
    body?: {}
  ) {
    let headers;
    if (isHeaders) {
      let access = await this.getCurrentToken();
      var token = this.getTokens();

      console.log('access', access);
      console.log('token', token);
      headers = new HttpHeaders({
        Authorization: token.token_type + ' ' + access,
      });
    } else {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }

    if (!params) {
      let params = new HttpParams();
    }

    if (!body) {
      let body = {};
    }

    try {
      let response = await lastValueFrom(
        this.http.request(method, url, {
          headers: headers,
          params: params,
          body: body,
        })
      );

      console.log('gen resp: ', response);
      return response;
    } catch (error) {
      console.error('Error:', error);
      return false;
    }

    // Ejemplos de llamadas
    /*  
         //LLamada posts favoritos
         let params = new HttpParams().set('page', '1');
          const httpMethod = 'GET';
          this.call('/api/posts/saved/', httpMethod, params); */

    /* 
          //llamada recibir todos los posts
          const httpMethod = 'GET';
          this.call('/api/posts/', httpMethod); */

    /*  //enviar comentario
          const httpMethod = 'POST';
          let params = new HttpParams();
          let body = { text: 'perro3' };

          this.network.call(
            '/api/posts/1/create_comment/',
            httpMethod,
            true,
            params,
            body
          ); */
  }

  /* // Deprecada porquue se puede usar la generica
  public favoritePosts() {
    var token = this.getTokens();
    let headers = new HttpHeaders({
      Authorization: token.token_type + ' ' + token.access_token,
    });

    let params = new HttpParams().set('page', '1');

    //console.log('headers: ', headers.getAll('Content-Type'));
    //console.log('headers2: ', headers.getAll('Authorization'));

    this.http
      .get<any>(`/api/posts/saved/`, {
        headers: headers,
        params: params,
      })
      .subscribe({
        next: (response: any) => {
          console.log('favorite posts: ', response);
        },
        error: (error: any) => {
          console.error('Error:', error);
        },
        complete: () => {
          console.log('Complete');
        },
      });
  } */

  //llamadas presentacion
  public getData01(): Observable<AuthToken> {
    let callData = {
      grant_type: 'password',
      username: 'ramonpuchades@rudo.es',
      password: 'Puchades123!',
      client_id: 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0',
      client_secret:
        'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u',
    };

    return this.http.post<AuthToken>(`/api/auth/token/`, callData);
  }

  public getData02(): Observable<AuthToken> {
    let callData = {
      grant_type: 'password',
      username: 'ramonpuchades@rudo.es',
      password: 'Puchades123!',
      client_id: 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0',
      client_secret:
        'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u',
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let params = new HttpParams();

    return this.http.post<AuthToken>(`/api/auth/token/`, callData, {
      params: params,
      headers: headers,
    });
  }

  public getData03(): Observable<AuthToken> {
    const url = '/api/auth/token/';
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let params = new HttpParams();

    let body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', 'ramonpuchades@rudo.es')
      .set('password', 'Puchades123!')
      .set('client_id', 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0')
      .set(
        'client_secret',
        'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u'
      );

    console.log('body to string: ', body.toString());

    return this.http.post<AuthToken>(url, body.toString(), {
      headers: headers,
      params: params,
    });
  }

  /* public getData04(): Observable<AuthToken> {
    const url = '/api/auth/token/';
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });

    const formData = new FormData();
    formData.append('grant_type', 'password');
    formData.append('username', 'ramonpuchades@rudo.es');
    formData.append('password', 'Puchades123!');
    formData.append('client_id', 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0');
    formData.append(
      'client_secret',
      'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u'
    );

    return this.http.post<AuthToken>(url, formData, { headers: headers });
  } */

  public getData04(): Observable<AuthToken> {
    const url = '/api/auth/token/';
    // Generar un boundary único
    const boundary = 'boundary_' + Math.random().toString().substr(2);

    // Establecer la cabecera con el Content-Type y el boundary específico
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data; boundary=' + boundary,
    });

    const body =
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="grant_type"\r\n\r\n` +
      `password\r\n` +
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="username"\r\n\r\n` +
      `ramonpuchades@rudo.es\r\n` +
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="password"\r\n\r\n` +
      `Puchades123!\r\n` +
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="client_id"\r\n\r\n` +
      `MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0\r\n` +
      `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="client_secret"\r\n\r\n` +
      `eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u\r\n` +
      `--${boundary}--`;

    return this.http.post<AuthToken>(url, body, { headers: headers });
  }

  public getData05(): Observable<AuthToken> {
    const url = '/api/auth/token/';

    const body = new FormData();
    body.append('grant_type', 'password');
    body.append('username', 'ramonpuchades@rudo.es');
    body.append('password', 'Puchades123!');
    body.append('client_id', 'MC836ujfkHA77dkYbaE6nmiVf5furYWrBBGJK7Y0');
    body.append(
      'client_secret',
      'eJDrPNaGEn7QkxT2aunCbCEbxViJ4Dv6iyi6AziCnFlv91jMFtOG5kRDqv2QzTMqgb6ti0SkjjCLBmbBAY7RiNuKzfxOnpBW9pH6OOe4m2wLW8OOehyYxfnzdNnzoz7u'
    );

    return this.http.post<AuthToken>(url, body);
  }
}
