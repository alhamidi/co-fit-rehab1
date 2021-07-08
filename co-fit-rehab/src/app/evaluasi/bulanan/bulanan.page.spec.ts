import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BulananPage } from './bulanan.page';

describe('BulananPage', () => {
  let component: BulananPage;
  let fixture: ComponentFixture<BulananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BulananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
