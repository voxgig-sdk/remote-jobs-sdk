<?php
declare(strict_types=1);

// RemoteJobs SDK base feature

class RemoteJobsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RemoteJobsContext $ctx, array $options): void {}
    public function PostConstruct(RemoteJobsContext $ctx): void {}
    public function PostConstructEntity(RemoteJobsContext $ctx): void {}
    public function SetData(RemoteJobsContext $ctx): void {}
    public function GetData(RemoteJobsContext $ctx): void {}
    public function GetMatch(RemoteJobsContext $ctx): void {}
    public function SetMatch(RemoteJobsContext $ctx): void {}
    public function PrePoint(RemoteJobsContext $ctx): void {}
    public function PreSpec(RemoteJobsContext $ctx): void {}
    public function PreRequest(RemoteJobsContext $ctx): void {}
    public function PreResponse(RemoteJobsContext $ctx): void {}
    public function PreResult(RemoteJobsContext $ctx): void {}
    public function PreDone(RemoteJobsContext $ctx): void {}
    public function PreUnexpected(RemoteJobsContext $ctx): void {}
}
