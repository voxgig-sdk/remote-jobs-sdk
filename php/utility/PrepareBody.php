<?php
declare(strict_types=1);

// RemoteJobs SDK utility: prepare_body

class RemoteJobsPrepareBody
{
    public static function call(RemoteJobsContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
