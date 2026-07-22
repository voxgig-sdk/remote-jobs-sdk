package core

type RemoteJobsError struct {
	IsRemoteJobsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRemoteJobsError(code string, msg string, ctx *Context) *RemoteJobsError {
	return &RemoteJobsError{
		IsRemoteJobsError: true,
		Sdk:              "RemoteJobs",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RemoteJobsError) Error() string {
	return e.Msg
}
