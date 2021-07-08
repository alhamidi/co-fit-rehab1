import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PascalatihanPage } from './pascalatihan.page';

describe('PascalatihanPage', () => {
  let component: PascalatihanPage;
  let fixture: ComponentFixture<PascalatihanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PascalatihanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PascalatihanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
