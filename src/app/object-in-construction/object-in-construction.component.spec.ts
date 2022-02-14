import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObjectInConstructionComponent } from './object-in-construction.component';

describe('ObjectInConstructionComponent', () => {
  let component: ObjectInConstructionComponent;
  let fixture: ComponentFixture<ObjectInConstructionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectInConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectInConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
