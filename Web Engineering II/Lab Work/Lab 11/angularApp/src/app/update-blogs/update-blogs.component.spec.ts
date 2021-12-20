import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlogsComponent } from './update-blogs.component';

describe('UpdateBlogsComponent', () => {
  let component: UpdateBlogsComponent;
  let fixture: ComponentFixture<UpdateBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
