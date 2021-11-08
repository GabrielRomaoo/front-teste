import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Escolaridade } from '../models/escolaridade';
import { getUserByIdRequest } from '../models/getUserByIdRequest';
import { updateUserRequest } from '../models/updateUserRequest';
import { User } from '../models/user';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  form: FormGroup;
  id :number;
  user : User
  escolaridades : Escolaridade
  constructor(private formBuilder: FormBuilder, private service: UserService, private route: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320),
          Validators.email
        ]),
      ],
      sobrenome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
    });

  }

  get formControls() {
    return this.form.controls;
  }

  updateUser() {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.id = params['id'];
      }
    );

    const requestId : getUserByIdRequest = {

      id : this.id

    }

    this.service.getByIdUsers(requestId)
              .pipe(
                tap((res) => {

                  this.user = res.data

                })
              )

    const request: updateUserRequest = {

      Nome: this.user.Nome,
      Sobrenome: this.user.Sobrenome,
      Email: this.user.Email,
      DataNascimento: this.user.DataNascimento,
      Escolaridade: this.user.Escolaridade

    };

    this.service.updateUser(request)
      .pipe(
        tap((res) =>{
          if (res.valid) {
            alert(res.message)
            this.router.navigateByUrl('/user');
          }
          else{
            alert(res.message)
            this.router.navigateByUrl('/user');
          }
        })
      )
  }
}
