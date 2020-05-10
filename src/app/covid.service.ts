import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  covidUrl = `https://corona.lmao.ninja/v2/countries`;

  public getCovidData() {
    return this.http.get(this.covidUrl);
  }

}
