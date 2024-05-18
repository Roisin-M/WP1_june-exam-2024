import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs';
import { companyDetails } from '../interfaces/interfacecomponent';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {
  private _url="https://664867af2bb946cf2fa07181.mockapi.io/companydetails"
  constructor(private _http:HttpClient) { }

  //fetch data from api
  getCompanyDetails():Observable<companyDetails[]> {
    return this._http.get<companyDetails[]>(this._url)
    .pipe(
      tap(data => console.log('data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
  //error handling
  private handleError(err:HttpErrorResponse) {
    return throwError(() => new Error("mockapi service:" + err.message))
  }
}
