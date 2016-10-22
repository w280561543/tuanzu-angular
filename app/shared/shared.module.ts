import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent }   from './sidebar/sidebar.component';

@NgModule({
	imports: [
		RouterModule
	],
	exports: [
		SidebarComponent
	],
	declarations: [
		SidebarComponent
	]
})
export class SharedModule {
	
}