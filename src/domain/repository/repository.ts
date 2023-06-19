import {IAggregate} from "../models/aggregate.model";

export interface IRepository<T extends IAggregate> {
    create?(data: T): Promise<T>

    viewAll?(): Promise<T[]>;

    viewByCriteria?(criteria: T): Promise<T[]>;
}