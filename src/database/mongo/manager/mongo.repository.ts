import {model, Model, Schema} from "mongoose";
import {IAggregate} from "../../../domain/models/aggregate.model";
import {IRepository} from "../../../domain/repository/repository";

/**
 * T = Model in mongo
 * K = Model in domain
 */
export abstract class MongoManager<T, K extends IAggregate> implements IRepository<K> {

    private readonly model: Model<T>

    protected constructor(collection: string, schema: Schema<T>) {
        this.model = model<T, Model<T>>(collection, schema)
    }

    protected get Model(): Model<T> {
        return this.model;
    }

    async create(data: K): Promise<K> {
        await this.model.create(data);
        return data;
    }

    viewAll(): Promise<K[]> {
        return this.model.find({});
    }

}