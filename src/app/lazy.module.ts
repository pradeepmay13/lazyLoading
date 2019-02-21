import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';

import { Routes, RouterModule } from '@angular/router';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes: Routes = [
    { path: 'load-me', component: LazyParentComponent },
	{ path: 'load-child', component: LazyParentComponent }
];

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(routes),
	NgMultiSelectDropDownModule.forRoot()
  ],
  declarations: [LazyChildComponent, LazyParentComponent]
})
export class LazyModule { }
