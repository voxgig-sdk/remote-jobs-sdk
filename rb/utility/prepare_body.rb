# RemoteJobs SDK utility: prepare_body
require_relative 'media'
module RemoteJobsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RemoteJobsUtilities.raw_body(ctx.reqdata) if RemoteJobsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
