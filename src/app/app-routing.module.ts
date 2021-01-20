import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { UserdetailFullComponent } from './core/components/userdetail-full/userdetail-full.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'userdetail/:userId', component: UserdetailFullComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
