import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermoduleCommComponent } from './intermodule-comm.component';

describe('IntermoduleCommComponent', () => {
  let component: IntermoduleCommComponent;
  let fixture: ComponentFixture<IntermoduleCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermoduleCommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermoduleCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
