"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("../../domain/Employee");
class EmployeeRepositoryImpl {
    constructor() {
        this._employeeList = new Array();
        let emp1 = new Employee_1.Employee(1, "Ignacio", "Jeria");
        let emp2 = new Employee_1.Employee(2, "Ismael", "Jeria");
        this._employeeList.push(emp1);
        this._employeeList.push(emp2);
    }
    findAll() {
        return this._employeeList;
    }
    saveOne(_domain) {
        this._employeeList.push(_domain);
        return _domain;
    }
    saveAll(_domain) {
        return _domain;
    }
    findOne(_id) {
        for (let i = 0; i < this._employeeList.length; i++) {
            if (this._employeeList[i]._id == _id)
                return this._employeeList[i];
        }
        return new Employee_1.Employee();
    }
}
exports.EmployeeRepositoryImpl = EmployeeRepositoryImpl;
