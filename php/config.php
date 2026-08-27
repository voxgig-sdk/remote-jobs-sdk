<?php
declare(strict_types=1);

// RemoteJobs SDK configuration

class RemoteJobsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RemoteJobs",
                "slug" => "remote-jobs",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://www.remote1stjobs.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "job" => [],
                ],
            ],
            "entity" => [
        'job' => [
          'fields' => [
            [
              'name' => 'apply_url',
              'short' => 'Direct application URL',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'company',
              'req' => true,
              'short' => 'Company name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'description',
              'short' => 'Detailed job description',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the job listing',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'location',
              'req' => true,
              'short' => 'Job location (remote location specification)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'posted_date',
              'short' => 'Date and time when the job was posted',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'region',
              'short' => 'Geographic region (UK, Europe, EMEA)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'salary',
              'short' => 'Salary range or compensation details',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'tags',
              'short' => 'Tags or categories associated with the job',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'title',
              'req' => true,
              'short' => 'Job title',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'Employment type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'req' => true,
              'short' => 'URL to the full job listing',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'job',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 50,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'region',
                        'orig' => 'region',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/jobs',
                  'parts' => [
                    'api',
                    'jobs',
                  ],
                  'select' => [
                    'exist' => [
                      'format',
                      'limit',
                      'region',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.jobs`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RemoteJobsFeatures::make_feature($name);
    }
}
