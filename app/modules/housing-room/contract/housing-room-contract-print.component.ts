import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-print',
	templateUrl: 'housing-room-contract-print.component.html'
})

export class HousingRoomContractPrintComponent implements OnInit {
	public ngOnInit(): void {
		console.log('HousingRoomContractPrintComponent');
	}
}