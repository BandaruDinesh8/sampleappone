import { IBaseRecordEditorFieldComponentConfig, IBaseRecordEditorFieldProperties } from '@helix/platform/view/components';

// The view component is a field view component.
// The design time properties must extend "IBaseRecordEditorFieldProperties".
// The custom view component properties are listed here, not the common properties
// like label for example.
// The parameters needs to be marked as optional (<name>?:<type>).
export interface ISamplefieldcomponentDesignProperties extends IBaseRecordEditorFieldProperties{
  message?: string;
}

// Interface used for runtime needs to extend IBaseRecordEditorFieldComponentConfig.
export interface ISamplefieldcomponentRuntimeProperties extends IBaseRecordEditorFieldComponentConfig{
  message?: string;
}
