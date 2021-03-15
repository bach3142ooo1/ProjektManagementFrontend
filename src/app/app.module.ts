import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent} from './Components/Shared/components/nav-bar/nav-bar.component';
import { TableComponent } from './Components/Feature/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketDetailComponent } from './Components/Feature/ticket-detail.component';
@NgModule({
  declarations: [AppComponent, NavBarComponent, TableComponent, TicketDetailComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
