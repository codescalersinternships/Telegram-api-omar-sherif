import dotenv from 'dotenv';
import cron from 'cron';
import Bot from './bot';
import Message from './services/messages';
dotenv.config();
const bot = Bot;
const message = new Message(bot);
// fires every day, at 01:05:01 and 13:05:01
let job = new cron.CronJob('01 05 01,13 * * *', message.goodMorning);
job.start();
