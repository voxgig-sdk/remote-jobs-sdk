// Typed models for the RemoteJobs SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Job {
  apply_url?: string
  company: string
  description?: string
  id: string
  location: string
  posted_date?: string
  region?: string
  salary?: string
  tags?: any[]
  title: string
  type?: string
  url: string
}

export interface JobListMatch {
  apply_url?: string
  company?: string
  description?: string
  id?: string
  location?: string
  posted_date?: string
  region?: string
  salary?: string
  tags?: any[]
  title?: string
  type?: string
  url?: string
}

