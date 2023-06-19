import {Authorized, Body, Delete, Get, JsonController, Param, Post, UseBefore} from "routing-controllers";
import {PokemonController} from "../controllers/pokemon.controller";
import {PokemonRepository} from "../database/mongo/repository/pokemon.repository";
import {IPokemon} from "../domain/models/pokemon.model";
import {JWTController} from "../controllers/jwt.controller";
import {RoleEnum} from "../domain/enums/role.enum";

@JsonController('/favorites')
@UseBefore(JWTController.Instance.verifyToken)
@Authorized(RoleEnum.ADMIN)
export class PokemonFavoritesView {
    private pokemonController: PokemonController;

    constructor() {
        this.pokemonController = new PokemonController(new PokemonRepository());
    }

    @Post('/')
    async createPokemon(@Body() pokemon: IPokemon) {
        return this.pokemonController.createPokemon(pokemon);
    }

    @Get('/:idUser')
    async viewListPokemonByUser(@Param('idUser') idUser: number) {
        return this.pokemonController.viewListPokemonByUser(idUser);
    }

    @Delete('/:idUser/:name')
    async removePokemonByUser(@Param('idUser') idUser: number, @Param('name') name: string) {
        return this.pokemonController.removePokemonByUser(name, idUser);
    }

}