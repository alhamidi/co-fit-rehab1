import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { WeeklyEvaluationService } from './../../../services/weekly-evaluation.service';


@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage implements OnInit {

  weeklyEvalForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private weeklyEvalService: WeeklyEvaluationService    
  ) { 
    this.weeklyEvalForm = this.formBuilder.group({
      rhr: [''],
      bfi: [''],
      sts30detik: [''],
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.weeklyEvalForm.valid) {
      alert("Harap lengkapi form evaluasi");
      return false;
    } else {
      this.weeklyEvalService.submitWeeklyEval(this.weeklyEvalForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.weeklyEvalForm.reset();
            this.router.navigate(['/menu/evaluasi/mingguan']);
          })
        });
    }
  }

}


