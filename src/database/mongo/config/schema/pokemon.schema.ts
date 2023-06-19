import {Schema} from "mongoose";
import {IPokemonDocumentMongo} from "../documents/pokemon.document";

export const PokemonSchema: Schema<IPokemonDocumentMongo> = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    versionPokemon: {
        type: String,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
});