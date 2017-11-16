import { Injectable } from '@angular/core';
import { Hero} from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
      this.messageService.add("Héroes cargados");
      return of(HEROES);
  }

  getHero(id:number) : Observable<Hero>
  {
      this.messageService.add("Cargando un hero con id "+id);
      return of(HEROES.find(hero => hero.id === id));
  }
}
