import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Docteur } from '../_models/docteur';
import { PraticienService } from '../_services/praticien.service';

@Injectable()
export class PraticienEditResolver implements Resolve<Docteur> {
    constructor(private praticienService: PraticienService, private router: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Docteur> {
        return this.praticienService.getDocteur(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('probleme d\'accès a vos données');
                this.router.navigate(['/liste-praticiens']);
                return of(null);
            })
        );
    }
}
