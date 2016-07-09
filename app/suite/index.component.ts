import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { NavbarComponent }  from 'app/partials/navbar.component';
import { SidebarComponent } from 'app/partials/sidebar.component';

import { SuiteService } from './suite.service';

export namespace Suite {
	@Component({
		selector: 'suite-index',
		templateUrl: 'app/suite/index.component.html',
		directives: [
			NgFor,

			NavbarComponent,
			SidebarComponent
		],
		providers: [SuiteService]
	})

	export class IndexComponent implements OnInit {
		public data = {
			"_embedded": {},
			"_links": {},
			"page": {}
		};
		public error: any;

		public constructor(
			private _suiteService: SuiteService
		) {}

		public ngOnInit() {
			this.getData();
		}

		public getData() {
			this._suiteService
				.getData()
				.then(response => this.data = response.json())
				.catch(error => this.error = error);
		}
	}
}