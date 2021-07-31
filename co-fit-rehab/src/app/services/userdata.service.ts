import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
 
const PRA_HR = 'pra_hr';
const PRA_SATO2 = 'pra_sato2';
const PRA_BS = 'pra_bs';
 
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

  setPraLatihanData(praBS, praSatO2, praHR) {
    this.storage.set(PRA_BS, praBS);
    this.storage.set(PRA_SATO2, praSatO2);
    this.storage.set(PRA_HR, praHR);
  }

  getPraBS() {
    return this.storage.get(PRA_BS);
  }

  getPraSatO2() {
    return this.storage.get(PRA_SATO2);
  }

  getPraHR() {
    return this.storage.get(PRA_HR);
  }

  getPraLatihanData() {
    this.data = {
      PRA_BS: this.storage.get(PRA_BS),
      PRA_SATO2: this.storage.get(PRA_SATO2),
      PRA_HR: this.storage.get(PRA_HR)
    }
    return this.data
  }
}
