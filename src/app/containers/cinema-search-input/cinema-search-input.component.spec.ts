import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaSearchInputComponent } from './cinema-search-input.component';

describe('CinemaSearchInputComponent', () => {
  let component: CinemaSearchInputComponent;
  let fixture: ComponentFixture<CinemaSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
