import { Component, OnInit, Inject, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder  } from "@angular/forms";
import { MonthlyEvaluationService } from './../../../services/monthly-evaluation.service';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage implements OnInit {

  monthlyEvalForm: FormGroup;
  skalaSesak: Array<string>;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private monthlyEvalService: MonthlyEvaluationService    
  ) { 
    this.monthlyEvalForm = this.formBuilder.group({
      uji_jalan: [''],
      skala_sesak: [''],
      sistolik: [''],
      diastolik: [''],
    })
  }

  ngOnInit() {
    this.skalaSesak = ["0", "1", "2", "3", "4"];
  }

  onSubmit() {
    if (!this.monthlyEvalForm.valid) {
      return false;
    } else {
      this.monthlyEvalService.submitMonthlyEval(this.monthlyEvalForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.monthlyEvalForm.reset();
            this.router.navigate(['/menu/evaluasi/bulanan']);
          })
        });
    }
  }

}
