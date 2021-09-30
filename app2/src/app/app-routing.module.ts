import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'app2', children: [
    { path: 'list', component: ListComponent},
    { path: 'table', component: TableComponent},
  ]},
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
