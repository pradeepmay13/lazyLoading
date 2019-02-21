import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    { path: 'lazy', loadChildren: './lazy.module#LazyModule'},
	{ path: 'testPage', component: TestComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [TestComponent]
})
export class RoutingModule { }
