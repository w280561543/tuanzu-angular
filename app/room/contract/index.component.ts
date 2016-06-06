import { Component } from '@angular/core';

import { NavbarComponent } from 'app/partials/navbar.component';
import { SidebarComponent } from 'app/partials/sidebar.component';

export namespace Room.Contract {
	@Component({
	    selector: 'room-contract-index',
	    templateUrl: 'app/room/contract/index.component.html',
	    directives:[NavbarComponent, SidebarComponent]
	})

	export class IndexComponent {
	}

}