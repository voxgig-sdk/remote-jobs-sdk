package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "RemoteJobs",
			"slug": "remote-jobs",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://www.remote1stjobs.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"job": map[string]any{},
			},
		},
		"entity": map[string]any{
			"job": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "apply_url",
						"short": "Direct application URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "company",
						"req": true,
						"short": "Company name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed job description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the job listing",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "location",
						"req": true,
						"short": "Job location (remote location specification)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "posted_date",
						"short": "Date and time when the job was posted",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"short": "Geographic region (UK, Europe, EMEA)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "salary",
						"short": "Salary range or compensation details",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "Tags or categories associated with the job",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "title",
						"req": true,
						"short": "Job title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "Employment type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"short": "URL to the full job listing",
						"type": "`$STRING`",
					},
				},
				"name": "job",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "region",
											"orig": "region",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/jobs",
								"parts": []any{
									"api",
									"jobs",
								},
								"select": map[string]any{
									"exist": []any{
										"format",
										"limit",
										"region",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.jobs`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
