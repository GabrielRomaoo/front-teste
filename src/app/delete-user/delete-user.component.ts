import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { deleteUserRequest } from '../models/deleteUserRequest';
import { switchMap, tap } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id:number

  constructor(private service: UserService, private route: ActivatedRoute, private router:Router) { }


  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.id = params['id'];
      }
    );

    const request : deleteUserRequest = {

      id : this.id

    }

    this.service.deleteUser(request)
    .pipe(
      tap((res) => {
          alert(res.message)
          this.router.navigateByUrl('/user');
      })
    )

  }
}
