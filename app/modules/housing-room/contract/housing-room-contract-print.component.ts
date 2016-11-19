import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

import { HousingRoomContractComponent } from './housing-room-contract.component';
import { HousingRoomContractService }   from './housing-room-contract.service';

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-print',
	templateUrl: 'housing-room-contract-print.component.html'
})
export class HousingRoomContractPrintComponent {
	
	@Input() public model: Object;
	
	public constructor(
		private _housingRoomContractComponent: HousingRoomContractComponent
	) {}

	public onNext(): void {
		this._housingRoomContractComponent.active(2);
	}

}

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-print-meal',
	templateUrl: 'housing-room-contract-print-meal-0.component.html'
})
export class HousingRoomContractPrintMealComponent {}

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-print-guide',
	templateUrl: 'housing-room-contract-print-guide.component.html'
})
export class HousingRoomContractPrintGuideComponent {}

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-print-receipt',
	templateUrl: 'housing-room-contract-print-receipt.component.html'
})
export class HousingRoomContractPrintReceiptComponent {}

@Component({
	moduleId: module.id,
	selector: 'housing-room-contract-print-resource',
	templateUrl: 'housing-room-contract-print-resource.component.html'
})
export class HousingRoomContractPrintResourceComponent {}