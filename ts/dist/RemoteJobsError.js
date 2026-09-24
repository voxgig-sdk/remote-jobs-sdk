"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteJobsError = void 0;
class RemoteJobsError extends Error {
    isRemoteJobsError = true;
    sdk = 'RemoteJobs';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.RemoteJobsError = RemoteJobsError;
//# sourceMappingURL=RemoteJobsError.js.map