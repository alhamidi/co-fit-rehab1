import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MingguanPage } from './mingguan.page';

describe('MingguanPage', () => {
  let component: MingguanPage;
  let fixture: ComponentFixture<MingguanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MingguanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MingguanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
