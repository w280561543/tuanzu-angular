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
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this._url = 'http://api.52tuanzu.com/v1';
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (data) {
        var _this = this;
        return this._http
            .post(this._url + '/staff/login', JSON.stringify(data))
            .map(function (res) {
            var j = res.json() || {};
            if (JSON.stringify(j) !== '{}' && j.code === 1) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
            return j;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService.prototype.handleError = function (e) {
        this.isLoggedIn = false;
        console.error(e);
        throw e.status + " +  -  + " + e.statusText;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map