import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // apiUrl = 'https://api.apispreadsheets.com/data/56HQReYS4WipYB8u/'
  apiUrl = 'https://sheetsu.com/apis/v1.0su/a262116544e7'
  // apiUrl = 'https://sheet.best/api/sheets/32d0a273-cf1b-4962-b3f4-f86fa31b7045'
  // apiUrl = 'https://api.sheety.co/741d61f22009f3ca59928b3b4463ed53/usuarios/página1'
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
