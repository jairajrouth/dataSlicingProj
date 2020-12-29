import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChartModuleComponent } from './chart-module.component';

describe('ChartModuleComponent', () => {
  let component: ChartModuleComponent;
  let fixture: ComponentFixture<ChartModuleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
