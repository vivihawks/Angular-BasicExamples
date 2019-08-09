import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComponent1Component } from './feature-component1.component';

describe('FeatureComponent1Component', () => {
  let component: FeatureComponent1Component;
  let fixture: ComponentFixture<FeatureComponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureComponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
