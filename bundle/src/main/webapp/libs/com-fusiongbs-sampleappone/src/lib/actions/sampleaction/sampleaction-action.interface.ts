import { IViewActionDesignProperties } from '@helix/platform/view/api';

// This Interface will be used during runtime.
export interface ISampleactionActionProperties {
  message: string;
}

// This Interface will be used during design time.
export interface ISampleactionActionDesignProperties extends IViewActionDesignProperties{
  message: string;
}
