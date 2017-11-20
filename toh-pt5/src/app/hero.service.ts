import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private messageService: MessageService,
    private http:HttpClient) { }


  /* Obtiene listado de heroes mediante petición HTTP */
  getHeroes (): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          tap(heroes => this.log(`Heroes han sido listados`)),
          catchError(this.handleError('getHeroes', []))
        );
    }

  /* Obtiene un único heroe, según un id especificado */
  getHero(id: number): Observable<Hero> {
     this.log("Obteniendo heroe numero "+id);
     const url = this.heroesUrl+"/"+id;
     return this.http.get<Hero>(url)
      .pipe(
          tap(_ => this.log('obteniendo heroe numero id '+id)),
          catchError(this.handleError('getHero '+id, []))
        );
  }

  /* Función estándar para manipular herrores HTTP */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log("Ha fallado el servicio"+ operation + " error:"+  error.message);

      return of(result as T);
    };
  }

  /* Función estándar para escribir mensajes de log */
  private log(message : string)
  {
    this.messageService.add(message);
  }
}
