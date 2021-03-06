import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  habilidades = ["Viajar en el tiempo", "Invisibilidad",
                  "Rapidez", "Lectura de mentes"];

  model = new Hero(15, "Gandalf", this.habilidades[1], "El blanco");

  submitted = false;

  onSubmit() { this.submitted = true; console.log("formulario enviado"); }

  get datos()
  {
      return JSON.stringify(this.model);
  }


  newHero()
  {
      this.model = new Hero(45,'','');
  }

  ngOnInit() {
  }

}
