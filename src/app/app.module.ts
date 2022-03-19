import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinicalculatorComponent } from './components/minicalculator/minicalculator.component';

import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InodesCalculatorComponent } from './components/inodes-calculator/inodes-calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    MinicalculatorComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    PagenotfoundComponent,
    InodesCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
