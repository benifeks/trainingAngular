import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { router } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HorseComponent } from './components/horse/horse.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackJackComponent,
    HeaderComponent,
    HomeComponent,
    HorseComponent,
    MakeUpTableComponent,
  ],
  imports: [BrowserModule, router],
  bootstrap: [AppComponent],
})
export class AppModule {}
