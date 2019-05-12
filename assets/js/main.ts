import {Container} from "./configuration/Container";
import {EmployeeService} from "./service/EmployeeService";
import {Employee} from "./domain/Employee";

const container: Container = Container.getInstance();

const employeeService: EmployeeService = container.getSingleton(EmployeeService.name);

window.onload = function () {

    let savebtn = document.getElementById("save_btn");

    savebtn.onclick = function () {

        let employee: Employee = new Employee();

        employee._name = (<HTMLInputElement>document.getElementById("first_name")).value;

        employeeService.save(employee);

        console.log(employeeService.findAll());

        console.log(container.getSingleton(EmployeeService.name).findAll())
    }
}

