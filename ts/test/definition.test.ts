import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "job",
    "accessor": "Job",
    "op": "list",
    "method": "GET",
    "path": "/api/jobs",
    "args": [],
    "select": {
      "format": "v1",
      "limit": "v1",
      "region": "v1"
    },
    "headers": [],
    "query": [
      "region",
      "limit",
      "format"
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
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
