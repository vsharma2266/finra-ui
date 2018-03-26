import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FinraService {

  constructor(private http: HttpClient) { }

  postInputAndFetchCombinations(input: number, pageSize: number): Observable<string[]> {
    const options =
    {
      params: new HttpParams().set('pagesize', pageSize.toString())
    };
    return this.http.post<string[]>(`/finra/${input}`, {}, options);
  }

  fetchCombinationsByPage(input: number, page: number, pageSize: number): Observable<string[]> {
    const options =
      {
        params: new HttpParams().set('page', page.toString()).append('pagesize', pageSize.toString())
      };
    return this.http.get<string[]>(`/finra/${input}`, options);
  }

  fetchMappings() {
    return this.http.get<{[Key: string]: string}>('/finra/mapping');
  }

}
