import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdropComponent } from './navdrop.component';

describe('NavdropComponent', () => {
  let component: NavdropComponent;
  let fixture: ComponentFixture<NavdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
