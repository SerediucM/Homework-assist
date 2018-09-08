import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import {ApiConnectionService} from './services/api-connection.service';
import { LoginComponent } from './components/admin/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { PageHeaderComponent } from './components/admin/page-header/page-header.component';
import { BookingsComponent } from './components/admin/bookings/bookings.component';
import { CalendarComponent } from './components/admin/calendar/calendar.component';
import { MyAccountComponent } from './components/admin/my-account/my-account.component';
import { MakeBookingsComponent } from './components/clients/make-bookings/make-bookings.component';
import { AddServiceComponent } from './components/admin/add-service/add-service.component';
import { ModalComponent } from './modal/modal.component';
import { CompanyComponent } from './components/admin/company/company.component'
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'account', component: MyAccountComponent },
  { path: 'makebooking', component: MakeBookingsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'addservice', component: AddServiceComponent },
  { path: '**', redirectTo: 'login' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageHeaderComponent,
    BookingsComponent,
    CalendarComponent,
    MyAccountComponent,
    MakeBookingsComponent,
    CompanyComponent,
    AddServiceComponent,
    ModalComponent,
    CompanyComponent
    ],
  imports: [
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ApiConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }