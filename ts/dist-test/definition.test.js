"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "job",
        "accessor": "Job",
        "op": "list",
        "method": "GET",
        "path": "/api/jobs",
        "args": [],
        "select": {
            "format": "json",
            "limit": 50,
            "region": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json",
            "application/rss+xml"
        ],
        "query": [
            "region",
            "limit",
            "format"
        ],
        "queryArgs": [
            {
                "name": "format",
                "wire": "format"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "region",
                "wire": "region"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "jobs": [
                {
                    "id": "12345",
                    "title": "Senior Software Engineer",
                    "company": "Tech Company Ltd",
                    "location": "Remote - UK",
                    "region": "UK",
                    "description": "We are looking for an experienced software engineer...",
                    "salary": "£60,000 - £80,000",
                    "type": "Full-time",
                    "url": "https://www.remote1stjobs.com/jobs/12345",
                    "posted_date": "2024-01-15T10:00:00Z",
                    "tags": [
                        "Engineering",
                        "Remote",
                        "Full-time"
                    ]
                }
            ],
            "total": 150,
            "page": 1
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map