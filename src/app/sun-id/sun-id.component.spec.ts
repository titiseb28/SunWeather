import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunIdComponent } from './sun-id.component';

describe('SunIdComponent', () => {
  let component: SunIdComponent;
  let fixture: ComponentFixture<SunIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
