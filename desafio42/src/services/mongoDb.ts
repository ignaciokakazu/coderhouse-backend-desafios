import config from '../config/config';
import mongoose, { Connection } from 'mongoose';
// import { config } from 'dotenv';

/* Clase que genera la conexión a mongodb. 
La finalidad es evitar que hayan varios query strings en 
el models/DAO */

mongoose.Promise = global.Promise;

//https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/


class MongoDB {
    private connection?: Connection;
    private srv: string;

    constructor(local?: boolean) {
        this.srv = local? config.MONGO_LOCAL_DBNAME : config.MONGO_ATLAS_SRV;
    }

    getConnection() {
        if (!this.connection){ 
            mongoose.connect(this.srv);
            this.connection =  mongoose.connection;
        } 
        return this.connection;
    }

}
// export class MongoDB {
//   private instance: number;
//   private uri: string;
//   private connection: Connection;

//   constructor(local?: boolean) {
//     this.uri = local ? Config.MONGO_LOCAL_DBNAME : Config.MONGO_ATLAS_SRV;
//     this.connection = mongoose.createConnection(this.uri);
//     this.instance = 0;
//   }

//   getConnection() {
//     return this.connection;
//   }
// }

export const MongoAtlas = new MongoDB();
// export const MongoLocal = new MongoDB(true);