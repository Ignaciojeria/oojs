export interface CrudRepository<ID,T>{
    saveOne(_domain: T): T;

    saveAll(_domain: Array<T>): Array<T>;

    findOne(_id: ID): T;

    findAll(): Array<T>;
}