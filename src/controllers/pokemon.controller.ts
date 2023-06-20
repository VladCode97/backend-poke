import {PokemonRepository} from "../database/mongo/repository/pokemon.repository";
import {IPokemon} from "../domain/models/pokemon.model";
import {MessagesSystemEnum} from "../domain/enums/messages.enum";

export class PokemonController {
    constructor(private readonly pokemonRepository: PokemonRepository) {
    }

    async createPokemon(pokemon: IPokemon) {
        try {
            const pokemonResponse = await this.pokemonRepository.viewPokemonByName(pokemon.name, pokemon.user.idDocument);
            if (pokemonResponse) {
                return MessagesSystemEnum.POKEMON_ALREADY_EXIST;
            } else {
                await this.pokemonRepository.create(pokemon);
                return pokemon
            }
        } catch (exception) {
            throw exception;
        }
    }

    async viewListPokemonByUser(idDocument: number) {
        try {
            return this.pokemonRepository.viewListPokemonByUser(idDocument);
        } catch (exception) {
            throw exception;
        }
    }

    async removePokemonByUser(id: string) {
        try {
            return this.pokemonRepository.removePokemonByUser(id);
        } catch (exception) {
            throw exception;
        }
    }

}