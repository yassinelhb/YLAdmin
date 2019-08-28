import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { ListusersComponent } from './views/users/listusers/listusers.component';




const routes: Routes = [
  { path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/users', pathMatch: 'full'},
      { path: 'users', component: ListusersComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
