
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs';
import { createUserRequest } from '../models/createUserRequest';
import { Escolaridade } from '../models/escolaridade';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  form: FormGroup;
  escolaridades : Escolaridade;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService
  ) {

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

  createUser() {

    const request: createUserRequest = {

      Nome: this.formControls['nome'].value,
      Sobrenome: this.formControls['sobrenome'].value,
      Email: this.formControls['email'].value,
      DataNascimento: this.formControls['dataNascimento'].value,
      Escolaridade: this.formControls['escolaridade'].value

    };

    this.service.createUser(request)
      .pipe(
        tap((res) => {

          if (res.valid) {
            alert(res.message)
          }
          else{
            alert(res.message)
          }
        }
        )
      )
  }
}
