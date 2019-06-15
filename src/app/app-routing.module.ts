import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostsComponent } from './components/hosts/hosts.component';

const routes: Routes = [
  { path: '**', redirectTo: 'hosts' },
  { path: 'hosts', component: HostsComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
