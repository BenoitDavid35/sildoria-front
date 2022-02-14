import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MailConfirmComponent } from './mail-confirm.component';

describe('MailConfirmComponent', () => {
  let component: MailConfirmComponent;
  let fixture: ComponentFixture<MailConfirmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MailConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
