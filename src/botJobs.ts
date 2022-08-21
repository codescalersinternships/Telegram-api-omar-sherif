import Message from './services/messages.js';
import Jobs from './services/jobs.js';
import Job from './services/job.js';
const message = new Message();

const goodMorningJob = new Job(
    {
        title: "Good morning Message",
        description: "this a good morning message",
        location: "Europe/Berlin",
        time: "0 0 * * *",
        func: message.goodMorning
    });
const jobs = new Jobs();
jobs.add(goodMorningJob);





jobs.startJobs();


// const message = new Message();
//const message = new Message(bot);


// fires every day, at 01:05:01 and 13:05:01

