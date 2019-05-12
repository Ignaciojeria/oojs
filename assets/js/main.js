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
