-- RemoteJobs SDK error

local RemoteJobsError = {}
RemoteJobsError.__index = RemoteJobsError


function RemoteJobsError.new(code, msg, ctx)
  local self = setmetatable({}, RemoteJobsError)
  self.is_sdk_error = true
  self.sdk = "RemoteJobs"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function RemoteJobsError:error()
  return self.msg
end


function RemoteJobsError:__tostring()
  return self.msg
end


return RemoteJobsError
