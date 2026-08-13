# RemoteJobs SDK utility: make_context

from projectname_sdk.core.context import RemoteJobsContext


def make_context_util(ctxmap, basectx):
    return RemoteJobsContext(ctxmap, basectx)
