import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserPlanetListComponent } from './user-planet-list.component';

describe('UserPlanetListComponent', () => {
  let component: UserPlanetListComponent;
  let fixture: ComponentFixture<UserPlanetListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlanetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlanetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
