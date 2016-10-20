import { Component } from '@angular/core';

@Component({
	template: `
	<div class="container-fluid">
		<div class="row">
			<div class="hidden-sm-down col-md-2">
				Sidebarsss
			</div>
			<div class="col-sm-12 col-md-10 col-md-offset-2">
				<router-outlet></router-outlet>
			</div>
		</div>
	</div>`
})

export class HousingComponent{
}