import { Component, OnInit } from '@angular/core';

import { HousingRoomContractComponent } from './housing-room-contract.component';
import { HousingRoomContractService }   from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-info',
	templateUrl: 'housing-room-contract-info.component.html'
})

export class HousingRoomContractInfoComponent implements OnInit {
	public model: Object = {
		user: {
			number_type: '1'
		},
		contract: {
			charge_administrative: '150',
			charge_resource: '150',
			mode_payment: '201',
			mode_delivery: '2',
			rental: '0',
			rental_adjust: '0',
			deposit: '0',
			date_sign: '',
			date_start: ''
		}
	};

	public constructor(
		private _housingRoomContractComponent: HousingRoomContractComponent,
		private _housingRoomContractService: HousingRoomContractService
	) {}

	public ngOnInit(): void {
		let d = new Date();
		this.model['contract'].date_sign = this.model['contract'].date_start = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
		this._housingRoomContractService.data$
		.subscribe(r => {
			this.model['contract'].rental = parseFloat(r['housing_room'].rental).toFixed(2);
			this.model['contract'].deposit = this.model['contract'].rental * 2;
		});
		
	}
	
	public onSubmit(): void {
		this.model['contract'].rental = parseFloat(this.model['contract'].rental);
		this._housingRoomContractComponent.onActive(1);
		this._housingRoomContractService.setModel(this.model);
	}
}