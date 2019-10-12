import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaMainComponent } from './cinema-main.component';

describe('CinemaMainComponent', () => {
  let component: CinemaMainComponent;
  let fixture: ComponentFixture<CinemaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
