import {MongoManager} from "../manager/mongo.repository";
import {IPokemonDocumentMongo} from "../config/documents/pokemon.document";
import {IPokemon} from "../../../domain/models/pokemon.model";
import {PokemonSchema} from "../config/schema/pokemon.schema";
import {SchemaMongoEnum} from "../../../domain/enums/schema-mongo.enum";

export class PokemonRepository extends MongoManager<IPokemonDocumentMongo, IPokemon> {
    constructor() {
        super(SchemaMongoEnum.FAVORITES_POKEMON, PokemonSchema);
    }

    viewPokemonByName(namePokemon: string, userId: number) {
        return this.Model.findOne({name: namePokemon, user: userId});
    }

    viewListPokemonByUser(idDocument: number) {
        return this.Model.find({
            user: idDocument
        });
    }

    removePokemonByUser(id: string) {
    return this.Model.findByIdAndRemove(id)
    }

}