
import { Context } from './Context'


class RemoteJobsError extends Error {

  isRemoteJobsError = true

  sdk = 'RemoteJobs'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RemoteJobsError
}

