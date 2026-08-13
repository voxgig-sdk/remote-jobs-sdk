# frozen_string_literal: true

# Typed models for the RemoteJobs SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Job entity data model.
#
# @!attribute [rw] apply_url
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] location
#   @return [String]
#
# @!attribute [rw] posted_date
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] salary
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String]
Job = Struct.new(
  :apply_url,
  :company,
  :description,
  :id,
  :location,
  :posted_date,
  :region,
  :salary,
  :tags,
  :title,
  :type,
  :url,
  keyword_init: true
)

# Request payload for Job#list.
#
# @!attribute [rw] apply_url
#   @return [String, nil]
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] posted_date
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] salary
#   @return [String, nil]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
JobListMatch = Struct.new(
  :apply_url,
  :company,
  :description,
  :id,
  :location,
  :posted_date,
  :region,
  :salary,
  :tags,
  :title,
  :type,
  :url,
  keyword_init: true
)

