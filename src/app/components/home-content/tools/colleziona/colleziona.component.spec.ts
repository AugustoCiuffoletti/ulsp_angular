import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollezionaComponent } from './colleziona.component';

describe('CollezionaComponent', () => {
  let component: CollezionaComponent;
  let fixture: ComponentFixture<CollezionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollezionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollezionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
