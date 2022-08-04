import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/32d0a273-cf1b-4962-b3f4-f86fa31b7045'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'token': '21392131',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C R U D = CREATE, READ, UPDATE, DELETE

  // C - SALVA USUARIO NO BANCO
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // R - RETORNA A LISTA DE USUÁRIOS
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // U - ATUALIZA O USUÁRIO (UPDATE)
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // D - EXCLUI O USUÁRIO DO BANCO
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }

  // LISTA USUÁRIO ÚNICO
  getUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }
}
