import { Component, OnInit } from '@angular/core';
import { Statistique } from '../models/model';

@Component({
  selector: 'app-formulaire-stat',
  templateUrl: './formulaire-stat.component.html',
  styleUrls: ['./formulaire-stat.component.scss']
})
export class FormulaireStatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

objetAPush= ''
tabAjout:Statistique[]=[]


donneValeur(e:Event){
  e.preventDefault()
  console.log('coucou');
}

}
