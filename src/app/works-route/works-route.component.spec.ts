import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksRouteComponent } from './works-route.component';

describe('WorksRouteComponent', () => {
  let component: WorksRouteComponent;
  let fixture: ComponentFixture<WorksRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
