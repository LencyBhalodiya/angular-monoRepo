import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Obj } from "@angular-monorepo/shared-utils";
import { catchError, EMPTY, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UtilService {

  http = inject(HttpClient);

  /**
   * Performs an HTTP GET request.
   *
   * @param url The URL to be requested.
   * @param headers The headers of the request. Defaults to an empty object.
   * @param ErrorCallback The callback function that will be called if an error occurs during the request. Defaults to null.
   * @returns The observable that represents the request.
   */
  getHttp(url: string, headers: Obj = {}, ErrorCallback: any = null): Observable<any> {
    const request$ = this.http.get(url, headers)

    return request$.pipe(
      catchError((err) => {
        ErrorCallback && ErrorCallback(err);
        console.error('An error occurred to Get Http:', err);
        return EMPTY;
      })
    );
  }

  /**
   * Posts an HTTP request.
   *
   * @param url The URL to be posted to.
   * @param body The object to be posted. Defaults to an empty object.
   * @param headers The headers of the request. Defaults to an empty object.
   * @param ErrorCallback The callback function that will be called if an error occurs during the request. Defaults to null.
   * @returns The observable that represents the request.
   */
  postHttp(url: string, body: Obj = {}, headers: Obj = {}, ErrorCallback: any = null): Observable<any> {
    const request$ = this.http.post(url, body, headers);

    return request$.pipe(
      catchError((err) => {
        ErrorCallback && ErrorCallback(err);
        console.error('An error occurred to Post Http:', err);
        return EMPTY;
      })
    );
  }




}