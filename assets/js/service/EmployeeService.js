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
