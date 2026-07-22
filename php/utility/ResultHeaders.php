<?php
declare(strict_types=1);

// RemoteJobs SDK utility: result_headers

class RemoteJobsResultHeaders
{
    public static function call(RemoteJobsContext $ctx): ?RemoteJobsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
