import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { GuardsCheckEnd } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoaderComponent } from './utils/loader/loader.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { AlertComponent } from './utils/alert/alert.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, LoaderComponent, AlertComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthenticationModule,
    UserModule,
    AdminModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: GuardsCheckEnd, useClass: AuthGuard },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
