"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeRepositoryImpl_1 = require("../repository/impl/EmployeeRepositoryImpl");
const EmployeeService_1 = require("../service/EmployeeService");
class Container {
    constructor() {
        this._containerInstanceReferenceMap = new Map();
        let employeeRepository = new EmployeeRepositoryImpl_1.EmployeeRepositoryImpl();
        this._containerInstanceReferenceMap.set(EmployeeRepositoryImpl_1.EmployeeRepositoryImpl.name, employeeRepository);
        let employeeService = new EmployeeService_1.EmployeeService(employeeRepository);
        this._containerInstanceReferenceMap.set(EmployeeService_1.EmployeeService.name, employeeService);
    }
    static getInstance() {
        return this._container;
    }
    getSingleton(className) {
        return this._containerInstanceReferenceMap.get(className);
    }
    /* Transiente de inyecciones en cascada */
    getCascadeTransient() {
    }
    /* Transiente especifico manteniendo las demás inyecciones como singleton */
    getEspecificTransient() {
    }
}
Container._container = new Container();
exports.Container = Container;
