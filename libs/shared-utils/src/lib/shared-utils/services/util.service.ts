import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Obj } from "@angular-monorepo/shared-utils";
import { catchError, EMPTY, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UtilService {

  http = inject(HttpClient);
  public test() {
    return 12323;
  }

  getHttp(url: string, headers: Obj = {}, ErrorCallback: any = null): Observable<any> {
    const request$ = this.http.get(url, headers)

    return request$.pipe(
      catchError((err) => {
        ErrorCallback && ErrorCallback(err);
        console.error('An error occurred:', err);
        return EMPTY;
      })
    );
  }

  postHttp(url: string, body: Obj = {}, headers: Obj = {}, ErrorCallback: any = null): Observable<any> {
    const request$ = this.http.post(url, body, headers)

    return request$.pipe(
      catchError((err) => {
        ErrorCallback && ErrorCallback(err);
        console.error('An error occurred:', err);
        return EMPTY;
      })
    );
  }




}