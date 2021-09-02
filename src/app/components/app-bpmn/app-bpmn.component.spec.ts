import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBpmnComponent } from './app-bpmn.component';

describe('AppBpmnComponent', () => {
  let component: AppBpmnComponent;
  let fixture: ComponentFixture<AppBpmnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBpmnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBpmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
