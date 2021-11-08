import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    users : User[];
    displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'email', 'dataNascimento', 'escolaridade', 'edita', 'excluir'];

    constructor(private service: UserService) {

  }

  ngOnInit(): void {

      this.service.listUsers()
      .pipe(
        tap((res) => {

          if(res.valid){
            this.users = res.data;
          }
          else
          {
            alert(res.message);
          }
        })
      )

  }

}
