import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent }    from './sidebar/sidebar.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		SidebarComponent,
		PaginationComponent
	],
	declarations: [
		SidebarComponent,
		PaginationComponent
	]
})
export class SharedModule {
	
}