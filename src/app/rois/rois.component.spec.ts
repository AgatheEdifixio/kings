import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoisComponent } from './rois.component';

describe('RoisComponent', () => {
  let component: RoisComponent;
  let fixture: ComponentFixture<RoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
