import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularKitComponent } from './angular-kit.component';

describe('AngularKitComponent', () => {
  let component: AngularKitComponent;
  let fixture: ComponentFixture<AngularKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
