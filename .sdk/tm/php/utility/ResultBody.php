<?php
declare(strict_types=1);

// RemoteJobs SDK utility: result_body

class RemoteJobsResultBody
{
    public static function call(RemoteJobsContext $ctx): ?RemoteJobsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
