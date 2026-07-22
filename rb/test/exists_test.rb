# RemoteJobs SDK exists test

require "minitest/autorun"
require_relative "../RemoteJobs_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RemoteJobsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
