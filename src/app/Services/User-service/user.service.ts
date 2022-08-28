import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;
  private _user: User = null;

  constructor(private http: HttpClient) {
  }

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/users`,);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/addUser`, user);
  }

  public deleteUsers(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/delete-user/${userId}`);
  }

  public updateUsers(userId: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/delete-user/${userId}`, user);
  }
  public getUserImage(userEmail: String): Observable<Blob> {
    return this.http.get<Blob>(`${this.apiServerUrl}/get/image/${userEmail}`);
  }
  public fetchProfileImage(userEmail: String): Observable<Blob> {
    let url = `${this.apiServerUrl}/get/image/${userEmail}`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
