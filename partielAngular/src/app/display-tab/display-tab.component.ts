import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/model';

@Component({
  selector: 'app-display-tab',
  templateUrl: './display-tab.component.html',
  styleUrls: ['./display-tab.component.scss']
})
export class DisplayTabComponent implements OnInit {

  constructor() {
    setTimeout((   ) => {
 this.tabStat.push(this.stat3);
    }, 3000);
  }

 stat1 = new Statistique ('s1','Stat1','ValeurStat1');
 stat2 = new Statistique ('s2','Stat2','ValeurStat2');
 stat3 = new Statistique ('s3','Stat3','ValeurStat3');
  
public tabStat:Statistique[] = []

  ngOnInit(): void {
    this.tabStat.push(this.stat1);
    this.tabStat.push(this.stat2);
  }


deleteStat (stat: Statistique) {
    let index = this.tabStat.indexOf(stat)
    this.tabStat.splice(index, 1)
  }

}
