import cron from 'cron';
class Job {
    constructor(jobDict) {
        this.title = jobDict.title;
        this.description = jobDict.description;
        this.location = jobDict.location;
        this.time = jobDict.time;
        this.func = jobDict.func;
        this.job = new cron.CronJob(this.time, this.func, null, false, this.location);
        this.job.start();
    }
}
export default Job;
