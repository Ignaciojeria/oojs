import {CrudRepository} from "./CrudRepository";
import {Employee} from "../domain/Employee";

export interface EmployeeRepository extends CrudRepository<number,Employee>{

}