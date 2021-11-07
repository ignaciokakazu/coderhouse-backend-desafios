import config from '../config/config';
import twilio from 'twilio';

class Twilio {
  private twilio;

  constructor() {
    this.twilio = twilio(config.TWILIO_ACCOUNT_ID, config.TWILIO_TOKEN);
  }

  async sendMessage(message: string) {
    const params = {
      body: message,
      from: config.TWILIO_CELLPHONE,
      to: config.TWILIO_ADMIN,
    };

    await this.twilio.messages.create(params);
    //return response;
  }
}

export const SmsService = new Twilio();
