import Job from "./job.js"

class Jobs {
    jobs: Job[];
    constructor() {
        this.jobs = [];
    }
    add(job: Job) {
        this.jobs.push(job);
    }
    getJobs() {
        return this.jobs;
    }
    remove(job: Job) {
        this.jobs = this.jobs.filter(j => j.title !== job.title);
    }
    startJobs() {
        this.jobs.forEach(j => j.job.start());
    }
    stopJobs() {
        this.jobs.forEach(j => j.job.stop());
    }

}

export default Jobs;