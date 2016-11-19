import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { HousingRoomContractService } from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-contract.component.html'
})
export class HousingRoomContractComponent implements OnInit {
	public step: Array < any > ;
	
	public housingRoomContract: Observable< any >;
	
	public data: Object = {};
	
	public constructor(
		private _route: ActivatedRoute,
		private _housingRoomContractService: HousingRoomContractService
	) {}

	public ngOnInit(): void {
		this.housingRoomContract = this._housingRoomContractService.getOne(this._route.params['value'].housing_room_id);

		this.step = [{
			active: true,
		}, {
			active: false,
		}, {
			active: false,
		}];
		this.housingRoomContract.subscribe(r => {
			this.data = r.json().data;
			console.log(this.data);
		})
	}

	public active(n: number): void {
		if(!this.step[n].active) {
			for(let i in this.step) {
				this.step[i].active = false;
			}
			this.step[n].active = true;
		}
	}

}