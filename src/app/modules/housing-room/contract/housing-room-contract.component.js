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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var housing_room_contract_service_1 = require("./housing-room-contract.service");
var HousingRoomContractComponent = (function () {
    function HousingRoomContractComponent(_route, _router, _housingRoomContractService) {
        this._route = _route;
        this._router = _router;
        this._housingRoomContractService = _housingRoomContractService;
        this.step = [{
                active: true,
            }, {
                active: false,
            }, {
                active: false,
            }];
        this.data = {};
        this.model = {};
    }
    HousingRoomContractComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._housingRoomContractService
            .getOne(this._route.params['value'].housing_room_id)
            .subscribe(function (r) {
            _this.data = r.json().data;
            _this._housingRoomContractService.setData(_this.data);
        });
    };
    HousingRoomContractComponent.prototype.setModel = function (model) {
        this.model = model;
    };
    HousingRoomContractComponent.prototype.onActive = function (n) {
        if (!this.step[n].active) {
            for (var i in this.step) {
                this.step[i].active = false;
            }
            this.step[n].active = true;
        }
    };
    HousingRoomContractComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = this.model;
        model['contract'].housing_room_id = this.data['housing_room'].housing_room_id;
        model['contract'].area_id = this.data['base_area'].area_id;
        // #TODO 一步一步添加.
        model['contract'].steward_id = 0;
        model['contract'].management_id = 0;
        model['contract'].look_id = 0;
        this._housingRoomContractService.create(model)
            .subscribe(function (r) {
            var b = r.json();
            if (b.code == 1) {
                _this._router.navigate(['/housing-room']);
            }
        });
    };
    return HousingRoomContractComponent;
}());
HousingRoomContractComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'housing-room-contract.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        housing_room_contract_service_1.HousingRoomContractService])
], HousingRoomContractComponent);
exports.HousingRoomContractComponent = HousingRoomContractComponent;
//# sourceMappingURL=housing-room-contract.component.js.map