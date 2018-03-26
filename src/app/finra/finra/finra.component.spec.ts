import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinraComponent } from './finra.component';

describe('FinraComponent', () => {
  let component: FinraComponent;
  let fixture: ComponentFixture<FinraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
