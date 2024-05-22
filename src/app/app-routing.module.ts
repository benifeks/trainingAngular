import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlackJackComponent } from './components/black-jack/black-jack.component';
import { HomeComponent } from './components/home/home.component';
import { HorseComponent } from './components/horse/horse.component';
import { MakeUpTableComponent } from './components/make-up-table/make-up-table.component';
import { DetailsUserComponent } from './components/make-up-table/details-user/details-user.component';
import { usersResolver } from 'src/services/users.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'black-jack', component: BlackJackComponent },
  { path: 'horse', component: HorseComponent },
  { path: 'make-up-table', component: MakeUpTableComponent },

  {
    path: 'make-up-table/:id',
    component: DetailsUserComponent,
    resolve: { data: usersResolver },
  },

  { path: '**', redirectTo: '' },
];

export const router: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(routes);
