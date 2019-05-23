import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit, Input } from '@angular/core';
import { Docteur } from 'src/app/_models/docteur';
import { PraticienService } from 'src/app/_services/praticien.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-praticien-card',
  templateUrl: './praticien-card.component.html',
  styleUrls: ['./praticien-card.component.css']
})
export class PraticienCardComponent implements OnInit {
  @Input() praticien: Docteur;
  constructor(private alertify: AlertifyService, private praticienService: PraticienService, private router: Router) { }

  ngOnInit() {
  }

  deletePraticien(id: number) {
    this.alertify.confirm('Etes vous sûr de vouloir supprimer ce docteur?', () =>
      this.praticienService.deleteDocteur(id).subscribe(() => {
        this.alertify.success('Le docteur a bien été supprimé');
        this.router.navigateByUrl('/liste-praticiens');
      }, error => {
        this.alertify.error('La suppression a échouée!');
      })
    );
  }
}
