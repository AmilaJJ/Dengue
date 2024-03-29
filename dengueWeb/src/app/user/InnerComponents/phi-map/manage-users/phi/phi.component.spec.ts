import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhiComponent } from './phi.component';

describe('UserComponent', () => {
  let component: PhiComponent;
  let fixture: ComponentFixture<PhiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
