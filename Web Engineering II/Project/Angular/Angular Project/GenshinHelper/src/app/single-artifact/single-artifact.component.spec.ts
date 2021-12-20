import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArtifactComponent } from './single-artifact.component';

describe('SingleArtifactComponent', () => {
  let component: SingleArtifactComponent;
  let fixture: ComponentFixture<SingleArtifactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleArtifactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
