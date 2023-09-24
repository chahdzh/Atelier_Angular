import { Component } from '@angular/core';
import {Fournisseur} from'../core/fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})

export class FournisseurComponent {
    
    Fournisseurs: Fournisseur={
      idFournisseur : 105,
      code : 'A104B89',
      libelle : 'MyTeck'
    };
    hide: boolean= false;

    Hide(){
      this.hide= ! this.hide ;
      console.log ('hide =', this.hide);
    }
    
}

