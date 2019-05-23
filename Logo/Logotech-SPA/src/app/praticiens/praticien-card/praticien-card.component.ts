import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit, Input } from '@angular/core';
import { Docteur } from 'src/app/_models/docteur';
import { PraticienService } from 'src/app/_services/praticien.service';

@Component({
  selector: 'app-praticien-card',
  templateUrl: './praticien-card.component.html',
  styleUrls: ['./praticien-card.component.css']
})
export class PraticienCardComponent implements OnInit {
  @Input() praticien: Docteur;
  constructor(private alertify: AlertifyService, private praticienService: PraticienService) { }

  ngOnInit() {
  }

  deletePraticien() {
    this.praticienService.deleteDocteur(this.praticien.id).subscribe(next => {
      this.alertify.success('Le docteur a bien été supprimé');
    }, error => {
      this.alertify.error(error);
    });
  }

}
