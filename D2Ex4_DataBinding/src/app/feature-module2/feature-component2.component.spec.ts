import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent2Component } from './feature-component2.component';

describe('FeatureComponent2Component', () => {
  let component: FeatureComponent2Component;
  let fixture: ComponentFixture<FeatureComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
