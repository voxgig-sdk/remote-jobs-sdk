"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('JobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when REMOTE_JOBS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('REMOTE_JOBS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RemoteJobsSDK.test();
        const ent = testsdk.Job();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.REMOTE_JOBS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "uri", "name": "apply_url", "req": false, "short": "Direct application URL", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "company", "req": true, "short": "Company name", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "req": false, "short": "Detailed job description", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for the job listing", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "location", "req": true, "short": "Job location (remote location specification)", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "date-time", "name": "posted_date", "req": false, "short": "Date and time when the job was posted", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "region", "req": false, "short": "Geographic region (UK, Europe, EMEA)", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "salary", "req": false, "short": "Salary range or compensation details", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "tags", "req": false, "short": "Tags or categories associated with the job", "type": "`$ARRAY`", "index$": 8 }, { "active": true, "name": "title", "req": true, "short": "Job title", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "type", "req": false, "short": "Employment type", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "uri", "name": "url", "req": true, "short": "URL to the full job listing", "type": "`$STRING`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "job", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 50, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "region", "orig": "region", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /api/jobs", "json": "{\"operationId\":\"getRemoteJobs\",\"parameters\":[{\"description\":\"Filter jobs by region (UK, Europe, EMEA)\",\"in\":\"query\",\"name\":\"region\",\"required\":false,\"schema\":{\"enum\":[\"UK\",\"Europe\",\"EMEA\"],\"type\":\"string\"}},{\"description\":\"Number of job listings to return\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":50,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Response format (json or rss)\",\"in\":\"query\",\"name\":\"format\",\"required\":false,\"schema\":{\"default\":\"json\",\"enum\":[\"json\",\"rss\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"jobs\":[{\"company\":\"Tech Company Ltd\",\"description\":\"We are looking for an experienced software engineer...\",\"id\":\"12345\",\"location\":\"Remote - UK\",\"posted_date\":\"2024-01-15T10:00:00Z\",\"region\":\"UK\",\"salary\":\"£60,000 - £80,000\",\"tags\":[\"Engineering\",\"Remote\",\"Full-time\"],\"title\":\"Senior Software Engineer\",\"type\":\"Full-time\",\"url\":\"https://www.remote1stjobs.com/jobs/12345\"}],\"page\":1,\"total\":150},\"schema\":{\"properties\":{\"jobs\":{\"items\":{\"properties\":{\"apply_url\":{\"description\":\"Direct application URL\",\"format\":\"uri\",\"type\":\"string\"},\"company\":{\"description\":\"Company name\",\"type\":\"string\"},\"description\":{\"description\":\"Detailed job description\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the job listing\",\"type\":\"string\"},\"location\":{\"description\":\"Job location (remote location specification)\",\"type\":\"string\"},\"posted_date\":{\"description\":\"Date and time when the job was posted\",\"format\":\"date-time\",\"type\":\"string\"},\"region\":{\"description\":\"Geographic region (UK, Europe, EMEA)\",\"enum\":[\"UK\",\"Europe\",\"EMEA\"],\"type\":\"string\"},\"salary\":{\"description\":\"Salary range or compensation details\",\"type\":\"string\"},\"tags\":{\"description\":\"Tags or categories associated with the job\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"title\":{\"description\":\"Job title\",\"type\":\"string\"},\"type\":{\"description\":\"Employment type\",\"enum\":[\"Full-time\",\"Part-time\",\"Contract\",\"Freelance\"],\"type\":\"string\"},\"url\":{\"description\":\"URL to the full job listing\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"id\",\"title\",\"company\",\"location\",\"url\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"total\":{\"description\":\"Total number of jobs available\",\"type\":\"integer\"}},\"type\":\"object\"}},\"application/rss+xml\":{\"schema\":{\"format\":\"xml\",\"type\":\"string\"}}},\"description\":\"Successful response with job listings\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Bad request - Invalid parameters\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Too many requests - Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/jobs", "segments": [{ "lit": "api" }, { "lit": "jobs" }], "select": { "exist": ["format", "limit", "region"] }, "transform": { "req": "`reqdata`", "res": "`body.jobs`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "job", "name__orig": "job", "Name": "Job", "name_": "job", "name-": "job", "NAME": "JOB", "index$": 0 }, { "active": true, "entity": "job", "key$": "BasicJobFlow", "kind": "basic", "name": "BasicJobFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "job_ref01" } }], "index$": 0 }] }, 'Job');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let job_ref01_data = Object.values(setup.data.existing.job)[0];
        // LIST
        const job_ref01_ent = client.Job();
        const job_ref01_match = {};
        const job_ref01_list = (await job_ref01_ent.list(job_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/job/JobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RemoteJobsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['job01', 'job02', 'job03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'REMOTE_JOBS_TEST_JOB_ENTID': idmap,
        'REMOTE_JOBS_TEST_LIVE': 'FALSE',
        'REMOTE_JOBS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['REMOTE_JOBS_TEST_JOB_ENTID'];
    const live = 'TRUE' === env.REMOTE_JOBS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['REMOTE_JOBS_TEST_JOB_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RemoteJobsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.REMOTE_JOBS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=JobEntity.test.js.map