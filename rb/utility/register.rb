# RemoteJobs SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RemoteJobsUtility.registrar = ->(u) {
  u.clean = RemoteJobsUtilities::Clean
  u.done = RemoteJobsUtilities::Done
  u.make_error = RemoteJobsUtilities::MakeError
  u.feature_add = RemoteJobsUtilities::FeatureAdd
  u.feature_hook = RemoteJobsUtilities::FeatureHook
  u.feature_init = RemoteJobsUtilities::FeatureInit
  u.fetcher = RemoteJobsUtilities::Fetcher
  u.make_fetch_def = RemoteJobsUtilities::MakeFetchDef
  u.make_context = RemoteJobsUtilities::MakeContext
  u.make_options = RemoteJobsUtilities::MakeOptions
  u.make_request = RemoteJobsUtilities::MakeRequest
  u.make_response = RemoteJobsUtilities::MakeResponse
  u.make_result = RemoteJobsUtilities::MakeResult
  u.make_point = RemoteJobsUtilities::MakePoint
  u.make_spec = RemoteJobsUtilities::MakeSpec
  u.make_url = RemoteJobsUtilities::MakeUrl
  u.param = RemoteJobsUtilities::Param
  u.prepare_auth = RemoteJobsUtilities::PrepareAuth
  u.prepare_body = RemoteJobsUtilities::PrepareBody
  u.prepare_headers = RemoteJobsUtilities::PrepareHeaders
  u.prepare_method = RemoteJobsUtilities::PrepareMethod
  u.prepare_params = RemoteJobsUtilities::PrepareParams
  u.prepare_path = RemoteJobsUtilities::PreparePath
  u.prepare_query = RemoteJobsUtilities::PrepareQuery
  u.graphql_body = RemoteJobsUtilities::GraphqlBody
  u.graphql_errors = RemoteJobsUtilities::GraphqlErrors
  u.result_basic = RemoteJobsUtilities::ResultBasic
  u.result_body = RemoteJobsUtilities::ResultBody
  u.result_headers = RemoteJobsUtilities::ResultHeaders
  u.transform_request = RemoteJobsUtilities::TransformRequest
  u.transform_response = RemoteJobsUtilities::TransformResponse
}
