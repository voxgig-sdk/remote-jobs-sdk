
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RemoteJobsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RemoteJobsSDK.test()
    equal(null !== testsdk, true)
  })

})
