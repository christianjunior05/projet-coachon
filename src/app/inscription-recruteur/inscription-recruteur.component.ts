import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-recruteur',
  templateUrl: './inscription-recruteur.component.html',
  styleUrls: ['./inscription-recruteur.component.scss']
})
export class InscriptionRecruteurComponent implements OnInit {
  logo : string="assets/coach_on.png"
  constructor() { }

  ngOnInit(): void {
  }

}
