<?php
declare(strict_types=1);

// RemoteJobs SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RemoteJobsMakeContext
{
    public static function call(array $ctxmap, ?RemoteJobsContext $basectx): RemoteJobsContext
    {
        return new RemoteJobsContext($ctxmap, $basectx);
    }
}
