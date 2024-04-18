import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoComponent } from './popo.component';

describe('PopoComponent', () => {
  let component: PopoComponent;
  let fixture: ComponentFixture<PopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
