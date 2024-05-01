import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { router } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HorseComponent } from './components/horse/horse.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';
import { MakeUpTableService } from '../services/make-up-table.service';
import { FieldComponent } from './components/make-up-table/field/field.component';
import { ButtonsComponent } from './components/make-up-table/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackJackComponent,
    HeaderComponent,
    HomeComponent,
    HorseComponent,
    MakeUpTableComponent,
    FieldComponent,
    ButtonsComponent,
  ],
  imports: [BrowserModule, router, FormsModule, HttpClientModule],
  providers: [MakeUpTableService],
  bootstrap: [AppComponent],
})
export class AppModule {}
