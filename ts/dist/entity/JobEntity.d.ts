import { RemoteJobsEntityBase } from '../RemoteJobsEntityBase';
import type { RemoteJobsSDK } from '../RemoteJobsSDK';
import type { Control } from '../types';
import type { Job, JobListMatch } from '../RemoteJobsTypes';
declare class JobEntity extends RemoteJobsEntityBase<Job> {
    constructor(client: RemoteJobsSDK, entopts: any);
    make(this: JobEntity): JobEntity;
    list(this: any, reqmatch?: JobListMatch, ctrl?: Control): Promise<JobEntity[]>;
}
export { JobEntity };
