import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { HousingRoomContractService } from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-contract-create.component.html'
})
export class HousingRoomContractCreateComponent implements OnInit {
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
		model['contract'].housing_room_id = this.data['housing_room'].housing_room_id;
		model['contract'].area_id = this.data['base_area'].area_id;

		// #TODO 一步一步添加.
		model['contract'].steward_id = 0;
		model['contract'].management_id = 0;
		model['contract'].look_id = 0;

		this._housingRoomContractService.create(model)
			.subscribe(r => {
				let b = r.json();
				if(b.code == 1) {
					this._router.navigate(['/housing-room']);
				}
			});
	}
}