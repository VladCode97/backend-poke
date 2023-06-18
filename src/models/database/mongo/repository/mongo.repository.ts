import {IRepository} from "../../../interfaces/repository/repository";
import {IAggregate} from "../../../interfaces/aggregate.model";
import {model, Model, Schema} from "mongoose";

/**
 * T = Model in mongo
 * K = Model in domain
 */
export abstract class MongoRepository<T, K extends IAggregate> implements IRepository<K> {

    private readonly model: Model<T>

    protected constructor(collection: string, schema: Schema<T>) {
        this.model = model<T, Model<T>>(collection, schema)
    }

    async create(data: K): Promise<K> {
        await this.model.create(data);
        return data;
    }

    viewAll(): Promise<K[]> {
        return this.model.find({});
    }

    viewByCriteria(criteria: K): Promise<K[]> {
        return this.model.find({...criteria});
    }

    protected get Model(): Model<T> {
        return this.model;
    }

}