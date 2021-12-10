import { Component } from '@angular/core';
import { Statistique } from './models/model/model.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   stat1 = new Statistique('s1', 'statUn', 'jeSuisLaValeurDeStatUn');
   stat2 = new Statistique('s2', 'statDeux', 'jeSuisLaValeurDeStatDeux');
}
