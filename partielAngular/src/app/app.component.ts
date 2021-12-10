import { Component } from '@angular/core';
import { Statistique } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   stat1 = new Statistique ('s1','Stat1','ValeurStat1')
   stat2 = new Statistique ('s2','Stat2','ValeurStat2')
    tabStat:Statistique[]= [this.stat1,this.stat2]
    displaytab = JSON.stringify(this.tabStat)
  }
