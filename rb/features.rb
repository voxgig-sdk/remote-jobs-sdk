# RemoteJobs SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RemoteJobsFeatures
  def self.make_feature(name)
    case name
    when "base"
      RemoteJobsBaseFeature.new
    when "ratelimit"
      RemoteJobsRatelimitFeature.new
    when "retry"
      RemoteJobsRetryFeature.new
    when "test"
      RemoteJobsTestFeature.new
    when "timeout"
      RemoteJobsTimeoutFeature.new
    else
      RemoteJobsBaseFeature.new
    end
  end
end
