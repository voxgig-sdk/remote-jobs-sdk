# RemoteJobs SDK utility: make_context

from remotejobs_sdk.core.context import RemoteJobsContext


def make_context_util(ctxmap, basectx):
    return RemoteJobsContext(ctxmap, basectx)
