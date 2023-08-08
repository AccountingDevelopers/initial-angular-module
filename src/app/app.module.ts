import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAccountingModule } from 'ng-accounting';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAccountingModule.forRoot({
      api: {
        key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGFlZGY2YmRmMWRhOTkwZWI0MmI1YjQiLCJjb21wYW55SWQiOiI2NGFmZmQ4ZDhlYjFkMzJhODBlM2I0YWIiLCJ3b3Jrc3BhY2VOYW1lIjoiam91cm5leSIsImlhdCI6MTY5MDU2MjAxMSwiZXhwIjoxNzE2NDgyMDExfQ.BRZ-3OIJ4qMpoH0CbEFr05mHfQKV4r1nZlKOuWiXv8U',
        url: {
          client: 'http://localhost:4200',
          server: isDevMode() ? 'http://localhost:80/api/v1' : 'http://localhost:80/api/v1'
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
