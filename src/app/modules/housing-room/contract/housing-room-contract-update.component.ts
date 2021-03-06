import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HousingRoomContractService } from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-contract-update.component.html'
})
export class HousingRoomContractUpdateComponent implements OnInit {
	private step: Array < any > = [{},{},{},{
		active: true,
	}, {
		active: false,
	}, {
		active: false,
	}];

	private data: Object = {};
	
	// 水电燃气
	private resource: Object = {};
	private model: Object = {};

	public constructor(
		private _route: ActivatedRoute,
		private _router :Router,
		private _housingRoomContractService: HousingRoomContractService
	) {}

	public ngOnInit(): void {
		this._housingRoomContractService
			.getOne(this._route.params['value'].housing_room_id)
			.subscribe(r => {
				this.data = r.json().data;
				this._housingRoomContractService.setData(this.data);
			});
	}

	public onActive(n: number): void {
		if(!this.step[n].active) {
			for(let i in this.step) {
				this.step[i].active = false;
			}
			this.step[n].active = true;
		}
	}
	
	public submitResource(): void {
		console.log(this.resource);
	}
}