import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingCompComponent } from './testing-comp.component';

describe('TestingCompComponent', () => {
  let component: TestingCompComponent;
  let fixture: ComponentFixture<TestingCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
