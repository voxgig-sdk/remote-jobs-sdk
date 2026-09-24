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
              "name" => "apply_url",
              "title" => "Apply Url",
              "type" => "`$STRING`",
              "short" => "Direct application URL",
              "format" => "uri",
            },
            {
              "name" => "company",
              "title" => "Company",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Company name",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Detailed job description",
            },
            {
              "name" => "id",
              "title" => "Id",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Unique identifier for the job listing",
            },
            {
              "name" => "location",
              "title" => "Location",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Job location (remote location specification)",
            },
            {
              "name" => "posted_date",
              "title" => "Posted Date",
              "type" => "`$STRING`",
              "short" => "Date and time when the job was posted",
              "format" => "date-time",
            },
            {
              "name" => "region",
              "title" => "Region",
              "type" => "`$STRING`",
              "short" => "Geographic region (UK, Europe, EMEA)",
            },
            {
              "name" => "salary",
              "title" => "Salary",
              "type" => "`$STRING`",
              "short" => "Salary range or compensation details",
            },
            {
              "name" => "tags",
              "title" => "Tags",
              "type" => "`$ARRAY`",
              "short" => "Tags or categories associated with the job",
            },
            {
              "name" => "title",
              "title" => "Title",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Job title",
            },
            {
              "name" => "type",
              "title" => "Type",
              "type" => "`$STRING`",
              "short" => "Employment type",
            },
            {
              "name" => "url",
              "title" => "Url",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "URL to the full job listing",
              "format" => "uri",
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
                  "parts" => [
                    "api",
                    "jobs",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.jobs`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "json",
                      },
                      {
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                        "kind" => "query",
                        "example" => 50,
                      },
                      {
                        "name" => "region",
                        "orig" => "region",
                        "type" => "`$STRING`",
                        "kind" => "query",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "format",
                      "limit",
                      "region",
                    ],
                  },
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
