"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'RemoteJobs',
        slug: "remote-jobs",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://www.remote1stjobs.com",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            job: {},
        }
    };
    entity = {
        "job": {
            "fields": [
                {
                    "format": "uri",
                    "name": "apply_url",
                    "short": "Direct application URL",
                    "type": "`$STRING`"
                },
                {
                    "name": "company",
                    "req": true,
                    "short": "Company name",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "Detailed job description",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "Unique identifier for the job listing",
                    "type": "`$STRING`"
                },
                {
                    "name": "location",
                    "req": true,
                    "short": "Job location (remote location specification)",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "posted_date",
                    "short": "Date and time when the job was posted",
                    "type": "`$STRING`"
                },
                {
                    "name": "region",
                    "short": "Geographic region (UK, Europe, EMEA)",
                    "type": "`$STRING`"
                },
                {
                    "name": "salary",
                    "short": "Salary range or compensation details",
                    "type": "`$STRING`"
                },
                {
                    "name": "tags",
                    "short": "Tags or categories associated with the job",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "title",
                    "req": true,
                    "short": "Job title",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "Employment type",
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "url",
                    "req": true,
                    "short": "URL to the full job listing",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "job",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "json",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "region",
                                        "orig": "region",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/jobs",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "jobs"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "format",
                                    "limit",
                                    "region"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.jobs`"
                            },
                            "parts": [
                                "api",
                                "jobs"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map