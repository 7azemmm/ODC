import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChildTwoComponent } from './main-child-two.component';

describe('MainChildTwoComponent', () => {
  let component: MainChildTwoComponent;
  let fixture: ComponentFixture<MainChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChildTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
