import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { NavbarComponent }  from 'app/partials/navbar.component';
import { SidebarComponent } from 'app/partials/sidebar.component';

import { SuiteService } from './suite.service';

export namespace Suite {
	@Component({
	    selector: 'suite-index',
	    templateUrl: 'app/suite/index.component.html',
	    directives:[
	    	NgFor,

	    	NavbarComponent,
	    	SidebarComponent
	    ],
	    providers: [SuiteService]
	})

	export class IndexComponent implements OnInit {
		public suites: Array;
		public error: any;

		public constructor( 
			private _suiteService: SuiteService
		) { }

		public ngOnInit() {
			this.getSuites();
		}

		public getSuites() {
			this._suiteService
				.getSuites()
				.then(response => this.suites = response.json()._embedded.suite)
				.catch(error => this.error = error);
		}
	}
}