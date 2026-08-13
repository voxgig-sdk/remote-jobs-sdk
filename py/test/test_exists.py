# RemoteJobs SDK exists test

import pytest
from remotejobs_sdk import RemoteJobsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RemoteJobsSDK.test(None, None)
        assert testsdk is not None
