import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/app.constant';
import { map } from 'rxjs/operators';
import { ITopHeadlines } from 'src/app/interface/top-headlines.interface';

@Injectable()
export class TopHeadlinesService {
  private _getTopHeadlinesUrl: string;

  constructor(private _http: Http) { }

  getTopHeadlines(country?: string, category?: string, sources?: string, q?: string, pageSize?: number): Observable<ITopHeadlines> {

    let urlParameters = '?';

    if (country) {
      urlParameters = urlParameters + 'country=' + country + '&';
    }

    if (category) {
      urlParameters = urlParameters + 'category=' + category + '&';
    }

    if (sources) {
      urlParameters = urlParameters + 'sources=' + sources + '&';
    }

    if (q) {
      urlParameters = urlParameters + 'q=' + q + '&';
    }

    if (pageSize) {
      urlParameters = urlParameters + 'pageSize=' + pageSize + '&';
    }

    this._getTopHeadlinesUrl = Constants.API_URL + 'top-headlines' + urlParameters + 'apiKey=' + Constants.API_Key;

    return this._http.get(this._getTopHeadlinesUrl).pipe(
      map(res => {
        if (res.status !== 200) {
          this.handleError(res);
        } else {
          return res.json();
        }
      })
    );

  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
