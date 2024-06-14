import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, catchError, forkJoin, of, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  mainUrl = environment.API_URL;

  constructor(private _httpClient: HttpClient, private router: Router ) { }
   // HttpClient API get() method => Fetch details
   get<T>(url: string) {
    return this._httpClient.get<T>(`${environment.API_URL}/${url}`).pipe(
        retry(1),
        catchError(this.handleError)
    )
}
// HttpClient API get() method => Fetch details
getList<T>(url: string) {
    return this._httpClient.get<T[]>(`${environment.API_URL}/${url}`).pipe(
        retry(1),
        catchError(this.handleError)
    )
}
    // Error handling 
    private handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
      } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
  }

//-----------------------------------------------------------------------------------------------------------------------------///


setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(inputdata: any){
   
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return this._httpClient.post(this.mainUrl+'login',inputdata);
    }

//  getEmployeeList(){
//   return this._httpClient.get(this.mainUrl+'sidenavList'+'/id')
//  }
   
//  getClientList(): Observable<any> {
//   return this._httpClient.get<any>(`${this.mainUrl}/company-popup`);
// }

// addClient(clientData: any): Observable<any> {
//   return this._httpClient.post<any>(`${this.mainUrl}/company-popup`, clientData);
// }

// updateClient(clientData: any): Observable<any> {
//   return this._httpClient.put<any>(`${this.mainUrl}/company-popup/${clientData.id}`, clientData);
// }

// deleteClient(clientId: number): Observable<any> {
//   return this._httpClient.delete<any>(`${this.mainUrl}/company-popup/${clientId}`);
// }






 registrationSave(data:any){
      
      return this._httpClient.post(this.mainUrl+'registration',data)
    }

}


// getEmployeeList(){
//   return this._httpClient.get(this.mainUrl+'sidenavList'+'/id')
// }