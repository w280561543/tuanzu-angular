import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { SharedModule }             from '../../shared/shared.module';
import { HousingRoomRoutingModule } from './housing-room-routing.module';

import { HousingRoomComponent }             from './housing-room.component';
import { HousingRoomDashboardComponent }    from './dashboard/housing-room-dashboard.component';
import { HousingRoomContractCreateComponent } from './contract/housing-room-contract-create.component';
import { HousingRoomContractUpdateComponent } from './contract/housing-room-contract-update.component';
import { HousingRoomContractRetrieveComponent } from './contract/housing-room-contract-retrieve.component';
import { HousingRoomContractInfoComponent } from './contract/housing-room-contract-info.component';

import { HousingRoomContractPrintComponent,
		 HousingRoomContractPrintMealComponent,
		 HousingRoomContractPrintGuideComponent,
		 HousingRoomContractPrintReceiptComponent,
		 HousingRoomContractPrintResourceComponent
} from './contract/housing-room-contract-print.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,

		SharedModule,
		HousingRoomRoutingModule
	],
	declarations: [
		HousingRoomComponent,
		HousingRoomDashboardComponent,
		HousingRoomContractCreateComponent,
		HousingRoomContractUpdateComponent,
		HousingRoomContractRetrieveComponent,
		HousingRoomContractInfoComponent,
		HousingRoomContractPrintComponent,
		HousingRoomContractPrintMealComponent,
		HousingRoomContractPrintGuideComponent,
		HousingRoomContractPrintReceiptComponent,
		HousingRoomContractPrintResourceComponent
	]
})

export class HousingRoomModule {}