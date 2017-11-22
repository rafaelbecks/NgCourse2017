import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  newHero: Hero;

  constructor(private heroService: HeroService, private location: Location) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  registrar(name : string)
  {
    name = name.trim()
    if(!name) {return;}
    this.heroService.registrar({ name } as Hero)
      .subscribe(heroe => 
      {
         this.heroes.push(heroe); 
      })
  }

  goBack(): void {
    this.location.back();
  }

  deleteHero(hero:Hero)
  {
    this.heroes = this.heroes.filter(h => h!==hero)
    this.heroService.delete(hero).subscribe();
  }


}
