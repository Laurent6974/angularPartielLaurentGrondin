import { Component, OnInit } from '@angular/core';

export class Statistique {
  identifiant: string;
  titre: string;
  valeur: string;

  constructor (id: string, titre: string, valeur: string) {
    this.identifiant = id
    this.titre = titre
    this.valeur = valeur
  }
}

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
