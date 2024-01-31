import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBlockComponent } from './components/title-block/title-block.component';
import { FooterBlockComponent } from './components/footer-block/footer-block.component';
import { HomeComponent } from './components/home/home.component';
import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';
import { HorseComponent } from './components/horse/horse.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'black-jack', component: BlackJackComponent},
  {path: 'make-up-table', component: MakeUpTableComponent},
  {path: 'horse', component: HorseComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TitleBlockComponent,
    FooterBlockComponent,
    HomeComponent,
    BlackJackComponent,
    MakeUpTableComponent,
    HorseComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
