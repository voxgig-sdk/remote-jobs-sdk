# Typed models for the RemoteJobs SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class JobRequired(TypedDict):
    company: str
    id: str
    location: str
    title: str
    url: str


class Job(JobRequired, total=False):
    apply_url: str
    description: str
    posted_date: str
    region: str
    salary: str
    tags: list
    type: str


class JobListMatch(TypedDict, total=False):
    apply_url: str
    company: str
    description: str
    id: str
    location: str
    posted_date: str
    region: str
    salary: str
    tags: list
    title: str
    type: str
    url: str
