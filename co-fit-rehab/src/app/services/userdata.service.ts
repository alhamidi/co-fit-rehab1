import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
 
const PATIENT_ID = 'patient_id'
const PATIENT_NAME = 'patient_name'
const PATIENT_CODE = 'patient_code'
const NO_RM = 'no_rm'

const PRA_HR = 'pra_hr';
const PRA_SATO2 = 'pra_sato2';
const PRA_BS = 'pra_bs';

const PASCA_HR = 'pasca_hr';
const PASCA_SATO2 = 'pasca_sato2';
const PASCA_BS = 'pasca_bs';
 
@Injectable({
  providedIn: 'root'
})

export class UserdataService {
  data = null;

  constructor(private storage: Storage) {
    this.init();
  }
 
  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
  }

  setPatientData(patientId, patientName, patientCode, noRm) {
    this.storage.set(PATIENT_ID, patientId);
    this.storage.set(PATIENT_NAME, patientName);
    this.storage.set(PATIENT_CODE, patientCode);
    this.storage.set(NO_RM, noRm);
  }

  setPraLatihanData(praBS, praSatO2, praHR) {
    this.storage.set(PRA_BS, praBS);
    this.storage.set(PRA_SATO2, praSatO2);
    this.storage.set(PRA_HR, praHR);
  }

  setPascaLatihanData(pascaBS, pascaSatO2, pascaHR) {
    this.storage.set(PASCA_BS, pascaBS);
    this.storage.set(PASCA_SATO2, pascaSatO2);
    this.storage.set(PASCA_HR, pascaHR);
  }

  // get patient data
  public async getPatientId() {
    return await this.storage.get(PATIENT_ID);
  }

  public async getPatientName() {
    return await this.storage.get(PATIENT_NAME);
  }

  public async getPatientCode() {
    return await this.storage.get(PATIENT_CODE);
  }

  public async getNoRm() {
    return await this.storage.get(NO_RM);
  }

  // get pre exercise data
  public async getPraBS() {
    return await this.storage.get(PRA_BS);
  }

  public async getPraSatO2() {
    return await this.storage.get(PRA_SATO2);
  }

  public async getPraHR() {
    return await this.storage.get(PRA_HR);
  }

  // get post exercise data
  public async getPascaBS() {
    return await this.storage.get(PASCA_BS);
  }

  public async getPascaSatO2() {
    return await this.storage.get(PASCA_SATO2);
  }

  public async getPascaHR() {
    return await this.storage.get(PASCA_HR);
  }

  public async remove(key){
    return await this.storage.remove(key);
  }

  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }
}
