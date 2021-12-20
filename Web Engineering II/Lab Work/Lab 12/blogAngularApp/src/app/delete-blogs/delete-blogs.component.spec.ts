import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBlogsComponent } from './delete-blogs.component';

describe('DeleteBlogsComponent', () => {
  let component: DeleteBlogsComponent;
  let fixture: ComponentFixture<DeleteBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
