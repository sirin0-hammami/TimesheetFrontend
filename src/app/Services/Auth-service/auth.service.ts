import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import jwt_decode from "jwt-decode";
 
export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
    authenticate(username, password) {
      return this.httpClient
        .post<any>("http://localhost:5000/authenticate", { username, password })
        .pipe(
          map(userData => {
            sessionStorage.setItem("username", username);
            let tokenStr = "Bearer " + userData.token;
            sessionStorage.setItem("token", tokenStr);
            let decoded = jwt_decode(sessionStorage.getItem("token"));
      sessionStorage.setItem("role",(decoded["role"][0]));
      console.log(sessionStorage.getItem("role"))
            return decoded ;
          })
        );
    }
    isUserLoggedIn() {
      let user = sessionStorage.getItem("username");
      console.log(!(user === null));
      return !(user === null);
    }
  
    logOut() {
      sessionStorage.removeItem("username");
    }
}
