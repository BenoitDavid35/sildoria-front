import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountWidgetComponent } from './account-widget.component';

describe('AccountWidgetComponent', () => {
  let component: AccountWidgetComponent;
  let fixture: ComponentFixture<AccountWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
