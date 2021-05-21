import "reflect-metadata";
import { ENTITIES } from '../entity/entities';
import { createConnection, getConnection, ConnectionOptions } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

export async function instanceDb() {
  //const serverCa = [fs.readFileSync(path.resolve('../api/ssl/DigiCertGlobalRootG2.crt.pem'), "utf8")];
  const options: ConnectionOptions = {
    name: 'default',
    type: "mysql",
    host: "printio-be.mysql.database.azure.com",
    port: 3306,
    username: "printio@printio-be",
    password: "K1eenDev@1980",
    database: "printio-manufacturing",
    //ssl: {
    //  rejectUnauthorized: true,
    //  ca: serverCa
    //},
    entities: ENTITIES,
    synchronize: true,
    logging: false
  };

  if (process.env.NODE_ENV === 'production') {
    try {
      return getConnection(options.name);
    } catch (error) {
      return createConnection(options);
    }
  } else {
    try {
      await getConnection(options.name).close();
      return createConnection(options);
    } catch (error) {
      return createConnection(options);
    }
  }
}
