import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynastieComponent } from './dynastie.component';

describe('DynastieComponent', () => {
  let component: DynastieComponent;
  let fixture: ComponentFixture<DynastieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynastieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynastieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
