import { AdminComponent } from './admin/admin.component';
import { AuthButtonComponent } from './../services/auth.service';
import { PhotoService } from './../services/photo.service';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle';
import { PaginationComponent } from './shared/pagination.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list';
import { AppErrorHandler } from './app.error-handler';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { VehicleService } from '../services/vehicle.service';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { AuthModule, AuthGuard } from '@auth0/auth0-angular';
import { UserProfileComponent } from './profile/profile.component';
import { AuthHttpInterceptorExtended } from 'src/services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    VehicleFormComponent,
    VehicleListComponent,
    ViewVehicleComponent,
    PaginationComponent,
    AuthButtonComponent,
    UserProfileComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: VehicleListComponent, pathMatch: 'full' },
      { path: 'vehicles/new', component: VehicleFormComponent, canActivate: [AuthGuard] },
      { path: 'vehicles/edit/:id', component: VehicleFormComponent, canActivate: [AuthGuard] },
      { path: 'vehicles/:id', component: ViewVehicleComponent },
      { path: 'vehicles', component: VehicleListComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
    ]),
    AuthModule.forRoot({
      domain: 'vega-app.eu.auth0.com',
      clientId: '8AJy8jJ6xvbFwvGxSCiO6xCWK166mB6h',
      responseType: 'token',
      audience: 'https://api.vega.com',
      httpInterceptor: {
        allowedList: [
          '/api/vehicles',
          {
            uri: 'https://api.vega.com/*',
            tokenOptions: {
              audience: 'https://api.vega.com'
            }
          }
        ]
      }
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorExtended, multi: true },
    VehicleService,
    PhotoService,
    AuthButtonComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
