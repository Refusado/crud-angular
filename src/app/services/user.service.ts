import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/01ae3d2c-cd5f-4d33-97bb-e5193331906c'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'token': '21392131',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C R U D = CREATE, READ, UPDATE, DELETE
  // RETORNA A LISTA DE USUÁRIOS
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // SALVA USUARIO NO BANCO
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }
}
