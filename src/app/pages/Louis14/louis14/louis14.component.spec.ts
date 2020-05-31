import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Louis14Component } from './louis14.component';

describe('Louis14Component', () => {
  let component: Louis14Component;
  let fixture: ComponentFixture<Louis14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Louis14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Louis14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
