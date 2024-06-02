import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4Component } from './my-comp4.component';

describe('MyComp4Component', () => {
  let component: MyComp4Component;
  let fixture: ComponentFixture<MyComp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComp4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
