import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/model';

@Component({
  selector: 'app-display-tab',
  templateUrl: './display-tab.component.html',
  styleUrls: ['./display-tab.component.scss']
})
export class DisplayTabComponent implements OnInit {

  constructor() {
  }

 stat1 = new Statistique ('s1','Stat1','ValeurStat1');
 stat2 = new Statistique ('s2','Stat2','ValeurStat2');
  
public tabStat:Statistique[] = []

  ngOnInit(): void {
    this.tabStat.push(this.stat1);
    this.tabStat.push(this.stat2);
  }

}
