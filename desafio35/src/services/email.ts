import config from '../config/config';
import nodemailer from 'nodemailer';

export default class EmailService {
  private owner:any;
  private transporter:any;

  constructor(service:string) {
      const name:string = service==='Ethereal'? config.ETHEREAL_NAME : config.GMAIL_NAME;
      const address:string = service==='Ethereal'? config.ETHEREAL_USERNAME : config.GMAIL_USERNAME;
      const host:string = service==='Ethereal'? config.ETHEREAL_HOST : config.GMAIL_HOST;
      const port:number = service==='Ethereal'? Number(config.ETHEREAL_PORT) : Number(config.GMAIL_PORT);
      const username:string = service==='Ethereal'? config.ETHEREAL_USERNAME : config.GMAIL_USERNAME;
      const password:string = service==='Ethereal'? config.ETHEREAL_PASS : config.GMAIL_PASS;

      this.owner = {
        name: name,
        address: address,
      };

      this.transporter = nodemailer.createTransport({
        host: host,
        port: port,
        secure:false,
        auth: {
          user: username,
          pass: password,
        },
      });
  }
  

  async sendEmail(dest: string, subject: string, content: string) {
    const mailOptions = {
      from: this.owner,
      to: dest,
      subject,
      html: content,
    };

    await this.transporter.sendMail(mailOptions);
    
  }
}


