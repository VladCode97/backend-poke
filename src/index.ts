//Connection mongoDB
import {MongoSingleton} from "./models/database/mongo/config/mongo.config";
import {createExpressServer} from 'routing-controllers';
import 'reflect-metadata';
import {config} from 'dotenv';
import {UserView} from "./views/user.view";
import 'class-transformer';

config();

async function main() {
    await MongoSingleton.Instance.establishConnection();
    const server = createExpressServer({
        controllers: [UserView],
        classTransformer: false,
    });
    server.listen(Number(process.env.PORT_SERVER), () => console.log(`http://localhost:${Number(process.env.PORT_SERVER)}`))
}

main();