import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWeaponComponent } from './single-weapon.component';

describe('SingleWeaponComponent', () => {
  let component: SingleWeaponComponent;
  let fixture: ComponentFixture<SingleWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleWeaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
