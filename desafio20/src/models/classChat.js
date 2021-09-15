import fs from 'fs';
import moment from 'moment';
//import { DBService } from '../persistencia/mensajes';
import {DBService} from '../persistencia/mongoMensajes';

export default class classChat {

    constructor() {
        //this.url = "./chat.txt";
        this.messages = [];
    }

    async setChat() {
        try {
            //let chat:any;
            /*if (fs.existsSync(this.url)) {
                chat = await fs.promises.readFile(this.url, 'utf-8');
            }*/
            
            let chat = await DBService.getAll();
            chat? this.messages = JSON.parse(chat) : this.messages = []; 
            return this.messages;
        } catch (err) {
            console.log(err.message);
        }
    }

    getChat() {
        return this.messages;
    }

    async connect(name) {
        try {
            const obj = {
                username: name,
                message: `Bienvenido/a ${name}`,
                timestamp: new Date()
            }
            await DBService.insert(obj);
            return obj;
        } catch (err) {
            console.log(`error: ${err.message}`)
        }
    }

    async disconnect(name) {
        const obj = {
            username: name,
            message: `${name} se ha desconectado`,
            timestamp: new Date()
        }
        await DBService.insert(obj);
        return obj;
    }

    async setMessage(data) {
        const obj = {
            username: data.username,
            message: data.message,
            timestamp: new Date()
        }
        await DBService.insert(obj);
        return obj;
    }    
}
