package voxgigremotejobssdk

import (
	"github.com/voxgig-sdk/remote-jobs-sdk/go/core"
	"github.com/voxgig-sdk/remote-jobs-sdk/go/entity"
	"github.com/voxgig-sdk/remote-jobs-sdk/go/feature"
	_ "github.com/voxgig-sdk/remote-jobs-sdk/go/utility"
)

// Type aliases preserve external API.
type RemoteJobsSDK = core.RemoteJobsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RemoteJobsEntity = core.RemoteJobsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RemoteJobsError = core.RemoteJobsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJobEntityFunc = func(client *core.RemoteJobsSDK, entopts map[string]any) core.RemoteJobsEntity {
		return entity.NewJobEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRemoteJobsSDK = core.NewRemoteJobsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewRemoteJobsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *RemoteJobsSDK  { return NewRemoteJobsSDK(nil) }
func Test() *RemoteJobsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
