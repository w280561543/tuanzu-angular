"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var housing_room_contract_component_1 = require("./housing-room-contract.component");
var housing_room_contract_service_1 = require("./housing-room-contract.service");
var HousingRoomContractInfoComponent = (function () {
    function HousingRoomContractInfoComponent(_housingRoomContractComponent, _housingRoomContractService) {
        this._housingRoomContractComponent = _housingRoomContractComponent;
        this._housingRoomContractService = _housingRoomContractService;
        this.model = {
            user: {},
            user_info: {
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
    }
    HousingRoomContractInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var d = new Date();
        var dt = d.getFullYear();
        if ((d.getMonth() + 1) < 10) {
            dt += '-0' + (d.getMonth() + 1);
        }
        else {
            dt += '-' + (d.getMonth() + 1);
        }
        if (d.getDate() < 10) {
            dt += '-0' + d.getDate();
        }
        else {
            dt += '-' + d.getDate();
        }
        this.model['contract'].date_sign = this.model['contract'].date_start = dt;
        this._housingRoomContractService.data$
            .subscribe(function (r) {
            _this.model['contract'].rental = parseFloat(r['housing_room'].rental).toFixed(2);
            _this.model['contract'].deposit = _this.model['contract'].rental * 2;
        });
    };
    HousingRoomContractInfoComponent.prototype.onNext = function () {
        this.model['contract'].rental = parseFloat(this.model['contract'].rental);
        this._housingRoomContractComponent.onActive(1);
        this._housingRoomContractComponent.setModel(this.model);
        this._housingRoomContractService.setModel(this.model);
    };
    return HousingRoomContractInfoComponent;
}());
HousingRoomContractInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'housing-room-contract-info',
        templateUrl: 'housing-room-contract-info.component.html'
    }),
    __metadata("design:paramtypes", [housing_room_contract_component_1.HousingRoomContractComponent,
        housing_room_contract_service_1.HousingRoomContractService])
], HousingRoomContractInfoComponent);
exports.HousingRoomContractInfoComponent = HousingRoomContractInfoComponent;
//# sourceMappingURL=housing-room-contract-info.component.js.map