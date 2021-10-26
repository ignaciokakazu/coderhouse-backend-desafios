//import { DBService } from '../persistencia/mensajes';
import fs from 'fs';
import {DBService} from '../persistencia/mongoMensajes';
import { normalize, schema } from 'normalizr';
import logger from '../utils/logger';

const author = new schema.Entity('author', {}, { idAttribute: 'email' });

const msg = new schema.Entity(
'message',
{
    author: author,
},
{ idAttribute: '_id' }
);

const msgesSchema = new schema.Array(msg);

export default class classChat {

    constructor() {
        //this.url = "./chat.txt";
        this.messages = [];
    }

    async setChat() {
        try {
            
            let chat = await DBService.getAll();
            chat? this.messages = JSON.parse(chat) : this.messages = []; 
            return this.messages;
        } catch (err) {
            logger.error(err.message);            
        }
    }

    async getAll() {
        try {
            const allMessagesMongo = await DBService.getAll();
            // acá normaliza
            // se saca del objeto Mongo
            if (allMessagesMongo) {
            const allMessagesJS = allMessagesMongo.map((aMsg) => ({
                _id: aMsg._id,
                author: aMsg.author,
                message: aMsg.message,
                timestamp: aMsg.timestamp
              }));
                        
            const normalizedMessages = normalize(allMessagesJS, msgesSchema);//author);//msgesSchema);

            logger.info(normalizedMessages);
            await fs.promises.writeFile('./chatNorm.txt', JSON.stringify(normalizedMessages,null, '\t'), 'utf-8')

            return [normalizedMessages.entities.message];
            } else {
                const chatVacio = [];
                return chatVacio;
            }
        } catch(e) {
            logger.error(e.stack)
        }
    }

    async connect(req) {
        try {
            const obj = {
                author: {
                    name: req.name,
                    surname: req.surname,
                    email: req.email,
                    age: req.age,
                    alias: req.alias,
                    avatar: req.avatar,
                },  
                message: `Bienvenido/a ${req.name} ${req.surname}`,
                timestamp: new Date()
            }
            await DBService.insert(obj);

            return obj;
        } catch (err) {
            logger.error(`error en connect: ${err.message}`, err.stack)
        }
    }

    async disconnect(req) {
        const obj = {
            author: {
                name: req.name,
                surname: req.surname,
                email: req.email,
                age: req.age,
                alias: req.alias,
                avatar: req.avatar
            },  
            message: `${req.name} ${req.surname} se ha desconectado`,
            timestamp: new Date()
        }
        await DBService.insert(obj);
        return obj;
    }

    async setMessage(req) {

        const obj = {
            author: {
                name: req.author.name,
                surname: req.author.surname,
                email: req.author.email,
                age: req.author.age,
                alias: req.author.alias,
                avatar: req.author.avatar,
            },  
            message: req.message,
            timestamp: new Date()
        }
        logger.info('setMessage')
        logger.error(obj);
        await DBService.insert(obj);
        return obj;
    }    
}

