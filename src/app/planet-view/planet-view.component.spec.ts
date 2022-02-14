import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlanetViewComponent } from './planet-view.component';

describe('PlanetViewComponent', () => {
  let component: PlanetViewComponent;
  let fixture: ComponentFixture<PlanetViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
