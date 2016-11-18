import { Component, OnInit } from '@angular/core';

import { HousingRoomContractService } from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	templateUrl: 'housing-room-contract.component.html'
})
export class HousingRoomContractComponent implements OnInit {
	public constructor(
		private _housingRoomContractService: HousingRoomContractService
	) {}

	public step: Array < any > ;

	public ngOnInit(): void {
		this.step = [{
			active: true,
		}, {
			active: false,
		}, {
			active: false,
		}];
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