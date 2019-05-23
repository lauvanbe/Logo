import { AlertifyService } from './../../_services/alertify.service';
import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/_models/Patient';
import { PatientService } from 'src/app/_services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  @Input() patient: Patient;
  constructor(private alertify: AlertifyService, private patientService: PatientService, private router: Router) { }

  ngOnInit() {
  }

  deletePatient(id: number) {
    this.alertify.confirm('Etes vous sûr de vouloir supprimer ce patient?', () =>
      this.patientService.deletePatient(id).subscribe(() => {
        this.alertify.success('Le patient a bien été supprimé');
        this.router.navigateByUrl('/reload');
      }, error => {
        this.alertify.error('La suppression a échouée!');
      })
    );
  }
}
