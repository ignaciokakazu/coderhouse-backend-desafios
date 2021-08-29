import fs from 'fs';
import moment from 'moment';

export default class classChat {
    url:string;
    messages:any;

    constructor() {
        this.url = "./chat.txt";
    }

    async setChat() {
        try {
            let chat:any;
            if (fs.existsSync(this.url)) {
                chat = await fs.promises.readFile(this.url, 'utf-8');
            }

            chat? this.messages = JSON.parse(chat) : this.messages = []; 
            
        } catch (err:any) {
            console.log(err.message);
        }
    }

    getChat() {
        return this.messages;
    }

    async connect(name:string) {
        try {
            const obj = {
                name: name,
                time: moment().format('DD/MM/YYYY, h:mm:ss a'),
                msg: `Bienvenido/a ${name}`
            }
            await this.setMessage(obj);
            return this.messages;
        } catch (err) {
            console.log(`error: ${err.message}`)
        }
    }

    async disconnect(name:any) {
        const obj:any = {
            name: name,
            time: moment().format('DD/MM/YYYY, h:mm:ss a'),
            msg: `${name} se ha desconectado`
        }
        await this.setMessage(obj)
        return obj
    }

    async setMessage(data:any) {
        const obj:any = {
            name: data.name,
            time: moment().format('DD/MM/YYYY, h:mm:ss a'),
            msg: data.msg
        }
        this.messages.push(obj)
        await fs.promises.writeFile(this.url, JSON.stringify(this.messages), 'utf-8');
        return obj;
    }    
}
