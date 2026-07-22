<?php
declare(strict_types=1);

// RemoteJobs SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RemoteJobsFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RemoteJobsBaseFeature();
            case "test":
                return new RemoteJobsTestFeature();
            default:
                return new RemoteJobsBaseFeature();
        }
    }
}
