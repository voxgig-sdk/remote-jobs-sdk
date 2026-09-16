# RemoteJobs SDK configuration

module RemoteJobsConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "RemoteJobs",
        "slug" => "remote-jobs",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://www.remote1stjobs.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "job" => {},
        },
      },
      "entity" => {
        "job" => {
          "fields" => [
            {
              "format" => "uri",
              "name" => "apply_url",
              "short" => "Direct application URL",
              "type" => "`$STRING`",
            },
            {
              "name" => "company",
              "req" => true,
              "short" => "Company name",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Detailed job description",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "req" => true,
              "short" => "Unique identifier for the job listing",
              "type" => "`$STRING`",
            },
            {
              "name" => "location",
              "req" => true,
              "short" => "Job location (remote location specification)",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "posted_date",
              "short" => "Date and time when the job was posted",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "short" => "Geographic region (UK, Europe, EMEA)",
              "type" => "`$STRING`",
            },
            {
              "name" => "salary",
              "short" => "Salary range or compensation details",
              "type" => "`$STRING`",
            },
            {
              "name" => "tags",
              "short" => "Tags or categories associated with the job",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "title",
              "req" => true,
              "short" => "Job title",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Employment type",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "req" => true,
              "short" => "URL to the full job listing",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "job",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 50,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "region",
                        "orig" => "region",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/api/jobs",
                  "segments" => [
                    {
                      "lit" => "api",
                    },
                    {
                      "lit" => "jobs",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "format",
                      "limit",
                      "region",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.jobs`",
                  },
                  "parts" => [
                    "api",
                    "jobs",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RemoteJobsFeatures.make_feature(name)
  end
end
