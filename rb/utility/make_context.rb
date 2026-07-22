# RemoteJobs SDK utility: make_context
require_relative '../core/context'
module RemoteJobsUtilities
  MakeContext = ->(ctxmap, basectx) {
    RemoteJobsContext.new(ctxmap, basectx)
  }
end
