import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor(private heroService : HeroService) { }

  heroes: Hero[];

  ngOnInit() {
      this.getHeroes();
  }

  getHeroes()
  {
      this.heroService.getHeroes()
          .subscribe( heroes => this.heroes = heroes.slice(1,5));
  }



}
