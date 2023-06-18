import { createExpressServer } from "routing-controllers";
import "reflect-metadata";
import { config } from "dotenv";
import { UserView } from "./views/user.view";
import { MongoSingleton } from "./database/mongo/config/mongo.config";
import { AuthView } from "./views/auth.view";
import { verifyRolesHanlder } from "./utils/handler/verify-roles.handler";

config();

async function main() {
  await MongoSingleton.Instance.establishConnection();
  const server = createExpressServer({
    controllers: [UserView, AuthView],
    classTransformer: false,
    authorizationChecker: verifyRolesHanlder,
  });
  server.listen(Number(process.env.PORT_SERVER), () =>
    console.log(`http://localhost:${Number(process.env.PORT_SERVER)}`)
  );
}

main();
