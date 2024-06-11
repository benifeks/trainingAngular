import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { HomeComponent } from './components/home/home.component';
import { HorseComponent } from './components/horse/horse.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'black-jack', component: BlackJackComponent },
  { path: 'horse', component: HorseComponent },
  { path: 'make-up-table', component: MakeUpTableComponent },
  { path: '**', redirectTo: '' },
];

export const router: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(routes);
