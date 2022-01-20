import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaModule } from './carta/carta.module';
import { MainModule } from './main/main.module';
import { SecurityModule } from './security';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, CartaModule, MainModule, SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }