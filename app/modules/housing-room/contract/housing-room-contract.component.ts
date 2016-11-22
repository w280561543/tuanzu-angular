import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { HousingRoomContractService } from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-contract.component.html'
})
export class HousingRoomContractComponent implements OnInit {
	public step: Array < any > = [{
			active: true,
		}, {
			active: false,
		}, {
			active: false,
		}];

	public data: Object = {};
	
	public constructor(
		private _route: ActivatedRoute,
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

}