import {EmployeeRepository} from "../repository/EmployeeRepository";
import {EmployeeRepositoryImpl} from "../repository/impl/EmployeeRepositoryImpl";
import {EmployeeService} from "../service/EmployeeService";

export class Container {

    private static readonly _container: Container = new Container();

    private _containerInstanceReferenceMap: Map<string, any>;

    private constructor() {
        this._containerInstanceReferenceMap = new Map<string, any>();

        let employeeRepository: EmployeeRepository = new EmployeeRepositoryImpl();
        this._containerInstanceReferenceMap.set(EmployeeRepositoryImpl.name, employeeRepository);

        let employeeService: EmployeeService = new EmployeeService(employeeRepository);
        this._containerInstanceReferenceMap.set(EmployeeService.name,employeeService);

    }

    public static getInstance(): Container {
        return this._container;
    }

    public getSingleton(className: string): any {
        return this._containerInstanceReferenceMap.get(className);
    }

    /* Transiente de inyecciones en cascada */
    public getCascadeTransient() {

    }

    /* Transiente especifico manteniendo las demás inyecciones como singleton */
    public getEspecificTransient() {

    }


}