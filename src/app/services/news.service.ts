import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = "https://newsapi.org/v2";

  private httpOptions = {
    headers: new HttpHeaders({
      "X-Api-Key": "476da354310f435ebf80839f7ddcba04"
    })
  }

  constructor(private http: HttpClient) { }

  searchEverything(q: string, searchIn: string = "title"): Observable<SearchResponse> {
    const encodedQ = encodeURI(q);
    console.log(this.baseUrl + "/everything?q=" + encodedQ + "&language=it&searchIn=" + searchIn);
    return this.http.get<SearchResponse>(this.baseUrl + "/everything?q=" + encodedQ + "&language=it&searchIn=" + searchIn, this.httpOptions);
  }
}
