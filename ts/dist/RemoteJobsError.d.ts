import { Context } from './Context';
declare class RemoteJobsError extends Error {
    isRemoteJobsError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { RemoteJobsError };
