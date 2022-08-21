import cron from 'cron';

interface JobInterface {
    title: string,
    description: string,
    location: string,
    time: string,
    func: () => void,
    job?: cron.CronJob
}
class Job implements JobInterface {
    job: cron.CronJob;
    title: string;
    description: string;
    location: string;
    time: string;
    func: () => void;

    constructor(jobDict: JobInterface) {
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