import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-info',
	templateUrl: 'housing-room-contract-info.component.html'
})

export class HousingRoomContractInfoComponent implements OnInit {
	public ngOnInit(): void {
		console.log('HousingRoomContractInfoComponent');
	}
}