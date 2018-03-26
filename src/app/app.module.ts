import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FinraComponent } from './finra/finra/finra.component';
import { FinraService } from './shared/services/finra.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FinraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FinraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
