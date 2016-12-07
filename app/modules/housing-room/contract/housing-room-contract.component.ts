import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { HousingRoomContractService } from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-contract.component.html'
})
export class HousingRoomContractComponent implements OnInit {
	private step: Array < any > = [{
			active: true,
		}, {
			active: false,
		}, {
			active: false,
		}];

	private data: Object = {};
	private model: Object = {};

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
	
	public setModel(model: Object): void {
		this.model = model;
	}

	public onActive(n: number): void {
		if(!this.step[n].active) {
			for(let i in this.step) {
				this.step[i].active = false;
			}
			this.step[n].active = true;
		}
	}

	public onSubmit(): void {
		let model = this.model;
		model['contract'].area_id = this.data['base_area'].area_id;
		this._housingRoomContractService.create(model)
		.subscribe(r => {
			console.log(r);
		});
	}
}