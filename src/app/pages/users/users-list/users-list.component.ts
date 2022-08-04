import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    }, (err) => {
      console.log('ALGO DEU ERRADO:');
      console.error(err.message);
    }, () => {
      console.info('Lista de usuários carregada');
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe((response:any) => {
      console.log(`Usuário ${response[0].nome} ${response[0].sobrenome} deletado com sucesso`);
    }, (err) => {
      console.log('ALGO DEU ERRADO:');
      console.error(err.message);
    }, () => {
      this.getUsers();
      console.info('Usuário deletado com sucesso');
    });
  }
}