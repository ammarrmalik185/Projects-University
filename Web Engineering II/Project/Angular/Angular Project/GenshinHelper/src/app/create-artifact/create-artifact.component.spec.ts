import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArtifactComponent } from './create-artifact.component';

describe('CreateArtifactComponent', () => {
  let component: CreateArtifactComponent;
  let fixture: ComponentFixture<CreateArtifactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateArtifactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArtifactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
