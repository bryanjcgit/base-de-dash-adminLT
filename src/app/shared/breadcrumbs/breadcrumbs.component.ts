import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent  implements OnDestroy {

  public titulo?: string
  public tituloSubs?: Subscription

  constructor( private router: Router ) {
    this.tituloSubs = this.getArgumento()
    .subscribe( ({titulo}) => {
      this.titulo = titulo
      document.title = titulo
    })
   }
  ngOnDestroy(): void {
    this.tituloSubs?.unsubscribe();
  }


  getArgumento(){
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: any) => event.snapshot.firstChild === null ),
        map( (event: any) => event.snapshot.data )
      )
    
  }



}
