import {EmployeeRepository} from "../repository/EmployeeRepository";
import {Employee} from "../domain/Employee";

export class EmployeeService {

    private readonly _employeeRepository: EmployeeRepository;

    constructor(_employeeRepository: EmployeeRepository) {
        this._employeeRepository = _employeeRepository;
    }

    findAll(): Array<Employee> {
        return this._employeeRepository.findAll();
    }

    save(employee: Employee): Employee {
        return this._employeeRepository.saveOne(employee);
    }

}