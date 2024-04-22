import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

import { router } from './app-routing.module';
import { BjService } from './services/bj.service';
import { HorseService } from './services/horse.service';
import { UsersService } from 'src/services/users.service';

import { AppComponent } from './app.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { DiceComponent } from './components/horse/horse-version/dice/dice.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HorseComponent } from './components/horse/horse.component';
import { HorseVersionComponent } from './components/horse/horse-version/horse-version.component';
import { InfoComponent } from './components/horse/horse-version/info/info.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';
import { TableAngularComponent } from './components/make-up-table/table-angular/table-angular.component';
import { TableComponent } from './components/make-up-table/table/table.component';
import { UsersComponent } from './components/make-up-table/users/users.component';
import { BaseComponent } from './components/base.component';
import { DetailsComponent } from './components/make-up-table/details/details.component';
import { PlaceComponent } from './components/horse/horse-version/place/place.component';
import { CardsPlayerComponent } from './components/black-jack/place-bj/cards-player/cards-player.component';
import { DeckComponent } from './components/black-jack/place-bj/deck/deck.component';
import { ControlBjComponent } from './components/black-jack/control-bj/control-bj.component';
import { InfoBjComponent } from './components/black-jack/info-bj/info-bj.component';
import { CardsBankirComponent } from './components/black-jack/place-bj/cards-bankir/cards-bankir.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    BlackJackComponent,
    DiceComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HorseComponent,
    HorseVersionComponent,
    InfoComponent,
    MakeUpTableComponent,
    TableAngularComponent,
    TableComponent,
    UsersComponent,
    DetailsComponent,
    PlaceComponent,
    CardsPlayerComponent,
    DeckComponent,
    ControlBjComponent,
    InfoBjComponent,
    CardsBankirComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    router,
  ],
  providers: [UsersService, MatDialog, HorseService, BjService],
  bootstrap: [AppComponent],
})
export class AppModule {}
