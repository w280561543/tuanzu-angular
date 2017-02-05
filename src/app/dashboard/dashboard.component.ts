import { Component } from '@angular/core';

@Component({
	template: `
	<div class="container-fluid p-0">
		<div class="row no-gutters">
			<div class="hidden-sm-down col-md-2">
				<t-siderbar></t-siderbar>
			</div>
			<div class="col-sm-12 col-md-10 col-md-offset-2">
				<nav class="breadcrumb">
					<span class="breadcrumb-item active">首页</span>
				</nav>
			</div>
		</div>
	</div>`
})

export class DashboardComponent {}