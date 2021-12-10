import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayTabComponent } from './display-tab/display-tab.component';
import { FormulaireStatComponent } from './formulaire-stat/formulaire-stat.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayTabComponent,
    FormulaireStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
