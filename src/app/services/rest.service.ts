import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';


interface Dato {
  userId: string;
  id: string;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})


export class RestService {

  dato:Dato;

  public baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(
      private httpClient: HttpClient ) {  }
  get_Datos() {
    return this.httpClient.get(this.baseUrl );
  }
 get_Dato(id): Observable<Dato>{
  
    let stringUrl=this.baseUrl +'/'+id;
    alert("----->>>"+stringUrl);
    return  this.httpClient.get<Dato>(stringUrl);
}

}