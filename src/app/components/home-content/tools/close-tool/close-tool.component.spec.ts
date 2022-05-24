import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseToolComponent } from './close-tool.component';

describe('CloseToolComponent', () => {
  let component: CloseToolComponent;
  let fixture: ComponentFixture<CloseToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
