-- Typed models for the RemoteJobs SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Job
---@field apply_url? string
---@field company string
---@field description? string
---@field id string
---@field location string
---@field posted_date? string
---@field region? string
---@field salary? string
---@field tag? table
---@field title string
---@field type? string
---@field url string

---@class JobListMatch
---@field apply_url? string
---@field company? string
---@field description? string
---@field id? string
---@field location? string
---@field posted_date? string
---@field region? string
---@field salary? string
---@field tag? table
---@field title? string
---@field type? string
---@field url? string

local M = {}

return M
