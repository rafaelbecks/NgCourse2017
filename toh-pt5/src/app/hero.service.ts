import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpHeaders = 
{
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

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
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpHeaders).pipe(
      tap(_ => this.log(`actualizado heroe con id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
    
  registrar(hero : Hero): Observable<Hero>
  {
    return this.http.post<Hero>(this.heroesUrl, hero, httpHeaders).pipe(
      tap((hero : Hero) => this.log('Registrado nuevo héroe')),
      catchError(this.handleError<Hero>('registrarHeroe'))
      );
  }

  delete(hero: Hero): Observable<Hero>
  {
    let id = hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url,httpHeaders).pipe(
      tap(_ => this.log(`eliminado heroe`)),
      catchError(this.handleError<Hero>('delete hero'))
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


 // getData() {
 //            return this.http.get(this.dataURL)
 //                  .do((res : Response ) => {res.json()})
 //                  .map((res : Response ) => res.json())
 //                  .catch(error => {return error});
 //      }



}
