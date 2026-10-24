import { JobEntity } from './entity/JobEntity';
export type * from './RemoteJobsTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { RemoteJobsEntityBase } from './RemoteJobsEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class RemoteJobsSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Job(entopts?: Record<string, any>): JobEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): RemoteJobsSDK;
    tester(testopts?: any, sdkopts?: any): RemoteJobsSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof RemoteJobsSDK;
export { stdutil, config, BaseFeature, RemoteJobsEntityBase, RemoteJobsSDK, SDK, };
export type { DirectResult };
