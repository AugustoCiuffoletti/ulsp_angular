import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricaComponent } from './carica.component';

describe('CaricaComponent', () => {
  let component: CaricaComponent;
  let fixture: ComponentFixture<CaricaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaricaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
