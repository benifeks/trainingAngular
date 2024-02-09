import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { router } from './app-routing.module';
import { HorseService } from './horse.service';

import { AppComponent } from './app.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { DiceComponent } from './components/horse/horse-version/dice/dice.component';
import { DicesComponent } from './components/horse/dices/dices.component';
import { FieldComponent } from './components/horse/field/field.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HorseComponent } from './components/horse/horse.component';
import { HorseVersionComponent } from './components/horse/horse-version/horse-version.component';
import { InfoComponent } from './components/horse/horse-version/info/info.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';
import { PlaceComponent } from './components/horse/horse-version/place/place.component';
import { SideBarComponent } from './components/horse/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackJackComponent,
    DiceComponent,
    DicesComponent,
    FieldComponent,
    HeaderComponent,
    HomeComponent,
    HorseComponent,
    HorseVersionComponent,
    InfoComponent,
    MakeUpTableComponent,
    PlaceComponent,
    SideBarComponent,
  ],
  imports: [BrowserModule, router],
  bootstrap: [AppComponent],
  providers: [HorseService],
})
export class AppModule {}
