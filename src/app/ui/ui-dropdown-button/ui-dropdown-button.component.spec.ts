import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDropdownButtonComponent } from './ui-dropdown-button.component';

describe('UiDropdownButtonComponent', () => {
  let component: UiDropdownButtonComponent;
  let fixture: ComponentFixture<UiDropdownButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDropdownButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
