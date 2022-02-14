import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetActionComponent } from './fleet-action.component';

describe('FleetActionComponent', () => {
  let component: FleetActionComponent;
  let fixture: ComponentFixture<FleetActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
