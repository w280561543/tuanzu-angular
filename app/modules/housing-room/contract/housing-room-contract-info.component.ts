import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HousingRoomContractService } from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-info',
	templateUrl: 'housing-room-contract-info.component.html'
})

export class HousingRoomContractInfoComponent implements OnInit {
	public constructor(
		private _route: ActivatedRoute
		private _housingRoomContractService: HousingRoomContractService
	) {}

	public ngOnInit(): void {
		this._housingRoomContractService.getOne(this._route.params.value.housing_room_id)
			.subscribe(r => {
				console.log(r);
			});
	}
}