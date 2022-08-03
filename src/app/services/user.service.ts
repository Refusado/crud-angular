import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/01ae3d2c-cd5f-4d33-97bb-e5193331906c'

  constructor(private httpClient: HttpClient) { }

  // C R U D = CREATE, READ, UPDATE, DELETE
  // RETORNA A LISTA DE USUÁRIOS
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }
}
