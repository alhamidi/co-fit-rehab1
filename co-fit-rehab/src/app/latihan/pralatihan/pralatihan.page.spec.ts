import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PralatihanPage } from './pralatihan.page';

describe('PralatihanPage', () => {
  let component: PralatihanPage;
  let fixture: ComponentFixture<PralatihanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PralatihanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PralatihanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
