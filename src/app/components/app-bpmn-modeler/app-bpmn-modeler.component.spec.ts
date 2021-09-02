import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBpmnModelerComponent } from './app-bpmn-modeler.component';

describe('AppBpmnModelerComponent', () => {
  let component: AppBpmnModelerComponent;
  let fixture: ComponentFixture<AppBpmnModelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBpmnModelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBpmnModelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
