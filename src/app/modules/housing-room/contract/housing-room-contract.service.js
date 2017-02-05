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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/catch");
var HousingRoomContractService = (function () {
    function HousingRoomContractService(_http) {
        this._http = _http;
        this._url = 'http://api.52tuanzu.com/v1/housing_room_contract';
        this.dataSource = new Subject_1.Subject();
        this.modelSource = new Subject_1.Subject();
        this.data$ = this.dataSource.asObservable();
        this.model$ = this.modelSource.asObservable();
    }
    HousingRoomContractService.prototype.setData = function (v) {
        this.dataSource.next(v);
    };
    HousingRoomContractService.prototype.setModel = function (v) {
        this.modelSource.next(v);
    };
    HousingRoomContractService.prototype.getOne = function (housing_room_id) {
        return this._http
            .get(this._url + '/' + housing_room_id)
            .catch(this.handleError);
    };
    HousingRoomContractService.prototype.create = function (model) {
        return this._http
            .post(this._url + '/create', JSON.stringify(model))
            .catch(this.handleError);
    };
    HousingRoomContractService.prototype.handleError = function (e) {
        var errMsg;
        if (e instanceof http_1.Response) {
            errMsg = e.status + " - " + (e.statusText || '');
        }
        else {
            errMsg = '';
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return HousingRoomContractService;
}());
HousingRoomContractService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HousingRoomContractService);
exports.HousingRoomContractService = HousingRoomContractService;
//# sourceMappingURL=housing-room-contract.service.js.map