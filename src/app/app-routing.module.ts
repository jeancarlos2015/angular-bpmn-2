import { AppBpmnModelerComponent } from './components/app-bpmn-modeler/app-bpmn-modeler.component';
import { AppBpmnComponent } from './components/app-bpmn/app-bpmn.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppBpmnComponent
  },
  {
    path: 'modeler',
    component: AppBpmnModelerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
