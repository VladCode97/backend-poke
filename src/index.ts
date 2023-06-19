import {createExpressServer} from "routing-controllers";
import "reflect-metadata";
import {config} from "dotenv";
import {UserView} from "./views/user.view";
import {MongoSingleton} from "./database/mongo/config/mongo.config";
import {AuthView} from "./views/auth.view";
import {verifyRolesHandler} from "./utils/handler/verify-roles.handler";
import {PokemonFavoritesView} from "./views/pokemon-favorites.view";
import {yamlHandler} from "./utils/handler/yaml.handler";
import {setup, serve} from "swagger-ui-express";
import {NextFunction, Request, Response} from "express";

config();

async function main() {
    await yamlHandler();
    await MongoSingleton.Instance.establishConnection();
    const server = createExpressServer({
        controllers: [UserView, AuthView, PokemonFavoritesView],
        classTransformer: false,
        authorizationChecker: verifyRolesHandler,
        validation: {
            always: true
        },
        cors: "*",
    });
    server.use("/swagger", async (request: Request, response: Response, next: NextFunction) => {
        next()
    }, serve, setup(await yamlHandler()))
    server.listen(Number(process.env.PORT_SERVER), () =>
        console.log(`http://localhost:${Number(process.env.PORT_SERVER)}`)
    );
}

main();
