import { Docteur } from 'src/app/_models/docteur';
import { PraticienService } from 'src/app/_services/praticien.service';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-praticien-edit',
  templateUrl: './praticien-edit.component.html',
  styleUrls: ['./praticien-edit.component.css']
})
export class PraticienEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  praticien: Docteur;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private praticienService: PraticienService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.praticien = data['praticien'];
    });
  }

  updatePraticien() {
    this.praticienService.updateDocteur(this.praticien.id, this.praticien).subscribe(next => {
      this.alertify.success('Le docteur a bien été mis à jour');
      this.editForm.reset(this.praticien);
    }, error => {
      this.alertify.error(error);
    });

  }
}
