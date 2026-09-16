# RemoteJobs SDK feature factory

from remotejobs_sdk.feature.base_feature import RemoteJobsBaseFeature
from remotejobs_sdk.feature.ratelimit_feature import RemoteJobsRatelimitFeature
from remotejobs_sdk.feature.retry_feature import RemoteJobsRetryFeature
from remotejobs_sdk.feature.test_feature import RemoteJobsTestFeature
from remotejobs_sdk.feature.timeout_feature import RemoteJobsTimeoutFeature


_FEATURES = {
    "base": lambda: RemoteJobsBaseFeature(),
    "ratelimit": lambda: RemoteJobsRatelimitFeature(),
    "retry": lambda: RemoteJobsRetryFeature(),
    "test": lambda: RemoteJobsTestFeature(),
    "timeout": lambda: RemoteJobsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
