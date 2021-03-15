import { NgModule, ɵisListLikeIterable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './Components/Feature/table.component';
import { TicketDetailComponent } from './Components/Feature/ticket-detail.component';

const routes: Routes = [
   {path: '', component: TableComponent},
   {path: 'table/:id', component: TicketDetailComponent},
   {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
