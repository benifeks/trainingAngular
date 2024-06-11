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
import { UsersService } from 'src/services/users.service';

import { AppComponent } from './app.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HorseComponent } from './components/horse/horse.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';
import { TableAngularComponent } from './components/make-up-table/table-angular/table-angular.component';
import { TableComponent } from './components/make-up-table/table/table.component';
import { UsersComponent } from './components/make-up-table/users/users.component';
import { BaseComponent } from './components/base.component';
import { DetailsComponent } from './components/make-up-table/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    BlackJackComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HorseComponent,
    MakeUpTableComponent,
    TableAngularComponent,
    TableComponent,
    UsersComponent,
    DetailsComponent,
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
  providers: [UsersService, MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
