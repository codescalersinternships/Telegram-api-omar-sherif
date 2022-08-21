class Jobs {
    constructor() {
        this.jobs = [];
    }
    add(job) {
        this.jobs.push(job);
    }
    getJobs() {
        return this.jobs;
    }
    remove(job) {
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
