import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFleetComponent } from './create-new-fleet.component';

describe('CreateNewFleetComponent', () => {
  let component: CreateNewFleetComponent;
  let fixture: ComponentFixture<CreateNewFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewFleetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
