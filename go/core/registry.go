package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJobEntityFunc func(client *RemoteJobsSDK, entopts map[string]any) RemoteJobsEntity

