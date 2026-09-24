

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RemoteJobsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('JobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when REMOTE_JOBS_TEST_LIVE=TRUE.
  afterEach(liveDelay('REMOTE_JOBS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RemoteJobsSDK.test()
    const ent = testsdk.Job()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.REMOTE_JOBS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"apply_url":{"a":true,"fo":"uri","h":"Apply Url","n":"apply_url","r":false,"sh":"Direct application URL","t":"`$STRING`","key$":"apply_url","index$":0},"company":{"a":true,"h":"Company","n":"company","r":true,"sh":"Company name","t":"`$STRING`","key$":"company","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Detailed job description","t":"`$STRING`","key$":"description","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the job listing","t":"`$STRING`","key$":"id","index$":3},"location":{"a":true,"h":"Location","n":"location","r":true,"sh":"Job location (remote location specification)","t":"`$STRING`","key$":"location","index$":4},"posted_date":{"a":true,"fo":"date-time","h":"Posted Date","n":"posted_date","r":false,"sh":"Date and time when the job was posted","t":"`$STRING`","key$":"posted_date","index$":5},"region":{"a":true,"h":"Region","n":"region","r":false,"sh":"Geographic region (UK, Europe, EMEA)","t":"`$STRING`","key$":"region","index$":6},"salary":{"a":true,"h":"Salary","n":"salary","r":false,"sh":"Salary range or compensation details","t":"`$STRING`","key$":"salary","index$":7},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Tags or categories associated with the job","t":"`$ARRAY`","key$":"tags","index$":8},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Job title","t":"`$STRING`","key$":"title","index$":9},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Employment type","t":"`$STRING`","key$":"type","index$":10},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"sh":"URL to the full job listing","t":"`$STRING`","key$":"url","index$":11}},"id":{"field":"id","name":"id"},"name":"job","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/jobs","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"json","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"region","or":"region","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/jobs","q":{"exist":["format","limit","region"]},"r":{},"s":[{"lit":"api"},{"lit":"jobs"}],"t":{"req":"`reqdata`","res":"`body.jobs`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"job","name__orig":"job","Name":"Job","name_":"job","name-":"job","NAME":"JOB","index$":0}, {"active":true,"entity":"job","key$":"BasicJobFlow","kind":"basic","name":"BasicJobFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"job_ref01"}}],"index$":0}]}, 'Job', {"GET /api/jobs":{"protocol":"http","operationId":"getRemoteJobs","responses":{"200":{"description":"Successful response with job listings","content":{"application/json":{"schema":{"type":"object","properties":{"jobs":{"items":{"properties":{"apply_url":{"description":"Direct application URL","format":"uri","type":"string","key$":"apply_url"},"company":{"description":"Company name","type":"string","key$":"company"},"description":{"description":"Detailed job description","type":"string","key$":"description"},"id":{"description":"Unique identifier for the job listing","type":"string","key$":"id"},"location":{"description":"Job location (remote location specification)","type":"string","key$":"location"},"posted_date":{"description":"Date and time when the job was posted","format":"date-time","type":"string","key$":"posted_date"},"region":{"description":"Geographic region (UK, Europe, EMEA)","enum":["UK","Europe","EMEA"],"type":"string","key$":"region"},"salary":{"description":"Salary range or compensation details","type":"string","key$":"salary"},"tags":{"description":"Tags or categories associated with the job","items":{"type":"string"},"type":"array","key$":"tags"},"title":{"description":"Job title","type":"string","key$":"title"},"type":{"description":"Employment type","enum":["Full-time","Part-time","Contract","Freelance"],"type":"string","key$":"type"},"url":{"description":"URL to the full job listing","format":"uri","type":"string","key$":"url"}},"required":["id","title","company","location","url"],"type":"object","x-ref":"#/components/schemas/Job","index$":0},"key$":"jobs","type":"array"},"total":{"description":"Total number of jobs available","key$":"total","type":"integer"},"page":{"description":"Current page number","key$":"page","type":"integer"}}},"example":{"jobs":[{"id":"12345","title":"Senior Software Engineer","company":"Tech Company Ltd","location":"Remote - UK","region":"UK","description":"We are looking for an experienced software engineer...","salary":"£60,000 - £80,000","type":"Full-time","url":"https://www.remote1stjobs.com/jobs/12345","posted_date":"2024-01-15T10:00:00Z","tags":["Engineering","Remote","Full-time"]}],"total":150,"page":1}},"application/rss+xml":{"schema":{"type":"string","format":"xml"}}}},"400":{"description":"Bad request - Invalid parameters","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"},"details":{"type":"string","description":"Additional error details"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}},"429":{"description":"Too many requests - Rate limit exceeded","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"},"details":{"type":"string","description":"Additional error details"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"code":{"type":"string","description":"Error code"},"details":{"type":"string","description":"Additional error details"}},"required":["error"],"x-ref":"#/components/schemas/Error"}}}}},"parameters":[{"name":"region","in":"query","description":"Filter jobs by region (UK, Europe, EMEA)","required":false,"schema":{"type":"string","enum":["UK","Europe","EMEA"]},"index$":0},{"name":"limit","in":"query","description":"Number of job listings to return","required":false,"schema":{"type":"integer","default":50,"minimum":1,"maximum":100},"index$":1},{"name":"format","in":"query","description":"Response format (json or rss)","required":false,"schema":{"type":"string","enum":["json","rss"],"default":"json"},"index$":2}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let job_ref01_data = Object.values(setup.data.existing.job)[0] as any

    // LIST
    const job_ref01_ent = client.Job()
    const job_ref01_match: any = {}

    const job_ref01_list = (await job_ref01_ent.list(job_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/job/JobTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RemoteJobsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['job01','job02','job03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'REMOTE_JOBS_TEST_JOB_ENTID': idmap,
    'REMOTE_JOBS_TEST_LIVE': 'FALSE',
    'REMOTE_JOBS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['REMOTE_JOBS_TEST_JOB_ENTID']

  const live = 'TRUE' === env.REMOTE_JOBS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['REMOTE_JOBS_TEST_JOB_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RemoteJobsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
