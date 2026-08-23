-- RemoteJobs SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "RemoteJobs",
      slug = "remote-jobs",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://www.remote1stjobs.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["job"] = {},
      },
    },
    entity = {
      ["job"] = {
        ["fields"] = {
          {
            ["name"] = "apply_url",
            ["short"] = "Direct application URL",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "company",
            ["req"] = true,
            ["short"] = "Company name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Detailed job description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the job listing",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "location",
            ["req"] = true,
            ["short"] = "Job location (remote location specification)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "posted_date",
            ["short"] = "Date and time when the job was posted",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["short"] = "Geographic region (UK, Europe, EMEA)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "salary",
            ["short"] = "Salary range or compensation details",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tags",
            ["short"] = "Tags or categories associated with the job",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "title",
            ["req"] = true,
            ["short"] = "Job title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "type",
            ["short"] = "Employment type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["req"] = true,
            ["short"] = "URL to the full job listing",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "job",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 50,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "region",
                      ["orig"] = "region",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/jobs",
                ["parts"] = {
                  "api",
                  "jobs",
                },
                ["select"] = {
                  ["exist"] = {
                    "format",
                    "limit",
                    "region",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.jobs`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
