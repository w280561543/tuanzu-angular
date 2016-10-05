import { Component, OnInit } from '@angular/core';

import { HousingService } from './housing.service';

@Component({
	selector: 'housing',
	templateUrl: 'app/module/housing/housing.component.html',
	providers: [HousingService]
})

export class HousingComponent implements OnInit {
	
	public data: Object[];
	
	public constructor(
		private housingService: HousingService
	) {}
	
	public ngOnInit() {
		/*
		this.housingService
			.getHousing()
			.then(data => [this.data = data, console.log(data)]);
		*/
	}
}