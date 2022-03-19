import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InodesCalculatorComponent} from './components/inodes-calculator/inodes-calculator.component'
import {MinicalculatorComponent} from './components/minicalculator/minicalculator.component'
import {MainComponent} from './components/main/main.component'
import {PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component'

const routes: Routes = [
  { path: 'inodes-calculator', component: InodesCalculatorComponent },
  { path: 'main-component', component: MainComponent },
  { path: 'mini-calculator', component: MinicalculatorComponent },
  { path: '',   redirectTo: '/main-component', pathMatch: 'full' }, 
  { path: '**', component: PagenotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
