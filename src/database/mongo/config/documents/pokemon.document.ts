import {Document} from "mongoose";
import {IPokemon} from "../../../../domain/models/pokemon.model";

export interface IPokemonDocumentMongo extends IPokemon, Document {
}