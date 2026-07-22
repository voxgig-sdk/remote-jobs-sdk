-- RemoteJobs SDK exists test

local sdk = require("remote-jobs_sdk")

describe("RemoteJobsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
