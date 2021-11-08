import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: 'create-user', component: CreateUserComponent },
  { path: 'delete-user/:id', component: DeleteUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'user', component: UserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
