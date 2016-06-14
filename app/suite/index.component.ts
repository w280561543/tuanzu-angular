import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router-deprecated';

import { NavbarComponent }  from 'app/partials/navbar.component';
import { SidebarComponent } from 'app/partials/sidebar.component';

import { Suite } 		from './suite';
import { SuiteService } from './suite.service';

export namespace Suite {
	@Component({
	    selector: 'm-suite-index',
	    templateUrl: 'app/suite/index.component.html',
	    directives:[NavbarComponent, SidebarComponent],
	    providers: [SuiteService]
	})

	export class IndexComponent implements OnInit {
		public data: any;
		public error: any;

		public constructor(
			private _router: Router, 
			private _suiteService: SuiteService
		) { }

		public ngOnInit() {
			this.getSuites();
		}

		public getSuites() {
			this._suiteService
				.getSuites();
		}
	}
}