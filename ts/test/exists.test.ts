
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RemoteJobsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RemoteJobsSDK.test()
    equal(testsdk instanceof RemoteJobsSDK, true,
      'RemoteJobsSDK.test() must return a client synchronously')
  })

})
