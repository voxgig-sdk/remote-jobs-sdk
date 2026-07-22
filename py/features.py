# RemoteJobs SDK feature factory

from feature.base_feature import RemoteJobsBaseFeature
from feature.test_feature import RemoteJobsTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RemoteJobsBaseFeature(),
        "test": lambda: RemoteJobsTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
