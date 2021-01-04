import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Framework} from '../model/framework';

@Injectable({
  providedIn: 'root'
})
export class FrameworkDaoService {

  url = 'http://localhost:9080/JaxRs01-1.0-SNAPSHOT/resources/frameworks';

  constructor(private httpClient: HttpClient) {
  }

  getFrameworks(): Observable<Framework[]> {
    let observable: Observable<Framework[]>;
    observable = this.httpClient.get<Framework[]>(this.url);
    return observable;
  }

  save(frameworks: Framework): Observable<any> {
     const contentTypeHeader = new HttpHeaders( {contentType: 'application/json'});
     const observableResponse = this.httpClient.post(this.url, frameworks, {headers: contentTypeHeader});
     return observableResponse;
  }
}
