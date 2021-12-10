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