import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotConnectedUserWelcomeComponent } from './not-connected-user-welcome.component';

describe('NotConnectedUserWelcomeComponent', () => {
  let component: NotConnectedUserWelcomeComponent;
  let fixture: ComponentFixture<NotConnectedUserWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotConnectedUserWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotConnectedUserWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
