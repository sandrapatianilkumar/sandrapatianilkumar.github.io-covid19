import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidgridComponent } from './covidgrid.component';

describe('CovidgridComponent', () => {
  let component: CovidgridComponent;
  let fixture: ComponentFixture<CovidgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
