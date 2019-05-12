import {Employee} from "../../domain/Employee";
import {EmployeeRepository} from "../EmployeeRepository";

export class EmployeeRepositoryImpl implements EmployeeRepository {

    private _employeeList: Array<Employee>;

    constructor() {
        this._employeeList = new Array<Employee>()
        let emp1: Employee = new Employee(1, "Ignacio", "Jeria");
        let emp2: Employee = new Employee(2, "Ismael", "Jeria");
        this._employeeList.push(emp1);
        this._employeeList.push(emp2);
    }

    findAll(): Array<Employee> {
        return this._employeeList;
    }


    saveOne(_domain: Employee): Employee {
        this._employeeList.push(_domain);
        return _domain;
    }

    saveAll(_domain: Array<Employee>): Array<Employee> {

        return _domain;
    }

    findOne(_id: number): Employee {
        for (let i = 0; i < this._employeeList.length; i++) {
            if (this._employeeList[i]._id == _id)
                return this._employeeList[i];
        }
        return new Employee();
    }


}



