import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Framework} from '../model/framework';

@Injectable({
  providedIn: 'root'
})
export class FrameworkDaoService {

  constructor(private httpClient: HttpClient) {
  }

  getFrameworks(): Observable<Framework[]> {
    const url = 'http://localhost:3000/frameworks';
    let observable: Observable<Framework[]>;
    observable = this.httpClient.get<Framework[]>(url);
    return observable;
    // observable.subscribe((fr) => {
    //   this.frameworks = fr;
    // });
  }
}
