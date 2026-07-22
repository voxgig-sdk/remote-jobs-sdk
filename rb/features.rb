# RemoteJobs SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RemoteJobsFeatures
  def self.make_feature(name)
    case name
    when "base"
      RemoteJobsBaseFeature.new
    when "test"
      RemoteJobsTestFeature.new
    else
      RemoteJobsBaseFeature.new
    end
  end
end
