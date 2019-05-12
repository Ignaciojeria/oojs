(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../repository/impl/EmployeeRepositoryImpl":4,"../service/EmployeeService":5}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(_id, _name, _lastName, _email) {
        this._id = _id;
        this._name = _name;
        this._lastName = _lastName;
        this._email = _email;
    }
}
exports.Employee = Employee;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("./configuration/Container");
const EmployeeService_1 = require("./service/EmployeeService");
const Employee_1 = require("./domain/Employee");
const container = Container_1.Container.getInstance();
const employeeService = container.getSingleton(EmployeeService_1.EmployeeService.name);
window.onload = function () {
    let savebtn = document.getElementById("save_btn");
    savebtn.onclick = function () {
        let employee = new Employee_1.Employee();
        employee._name = document.getElementById("first_name").value;
        employeeService.save(employee);
        console.log(employeeService.findAll());
        console.log(container.getSingleton(EmployeeService_1.EmployeeService.name).findAll());
    };
};

},{"./configuration/Container":1,"./domain/Employee":2,"./service/EmployeeService":5}],4:[function(require,module,exports){
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

},{"../../domain/Employee":2}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeService {
    constructor(_employeeRepository) {
        this._employeeRepository = _employeeRepository;
    }
    findAll() {
        return this._employeeRepository.findAll();
    }
    save(employee) {
        return this._employeeRepository.saveOne(employee);
    }
}
exports.EmployeeService = EmployeeService;

},{}]},{},[3]);
