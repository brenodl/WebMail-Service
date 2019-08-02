import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmailFormGroupComponent } from './bmail-form-group.component';

describe('BmailFormGroupComponent', () => {
  let component: BmailFormGroupComponent;
  let fixture: ComponentFixture<BmailFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmailFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmailFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
