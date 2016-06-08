import { Component, OnInit } from '@angular/core';

import { NavbarComponent }  from 'app/partials/navbar.component';
import { SidebarComponent } from 'app/partials/sidebar.component';

import { SuiteService } from './suite.service';

export namespace Suite {
	@Component({
	    selector: 'm-suite-index',
	    templateUrl: 'app/suite/index.component.html',
	    directives:[NavbarComponent, SidebarComponent],
	    providers: [SuiteService]
	})

	export class IndexComponent implements OnInit {
		public suites = [];
		public errorMessage: string;
		
		public constructor(private suiteService: SuiteService) {}
		
		public ngOnInit() {
			this.suiteService.getSuites();
		}
	}

}