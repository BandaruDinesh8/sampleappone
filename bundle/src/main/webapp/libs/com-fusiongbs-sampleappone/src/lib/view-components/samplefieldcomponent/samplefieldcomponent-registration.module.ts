import { NgModule } from '@angular/core';
import { RxViewComponentRegistryService, RxViewComponentType } from '@helix/platform/view/api';
import { RX_BASE_FIELD_PROPERTIES } from '@helix/platform/view/components';
import { SamplefieldcomponentComponent } from './runtime/samplefieldcomponent.component';
import { SamplefieldcomponentDesignComponent } from './design/samplefieldcomponent-design.component';
import { SamplefieldcomponentDesignModel } from './design/samplefieldcomponent-design.model';

@NgModule()
export class SamplefieldcomponentRegistrationModule {
  constructor(rxViewComponentRegistryService: RxViewComponentRegistryService) {
    rxViewComponentRegistryService.register({
      type: 'com-fusiongbs-sampleappone-samplefieldcomponent',
      name: 'Samplefieldcomponent',
      icon: 'wall',
      group: 'SampleApplication7',
      // A field view component is considered as a record editor field.
      // It can be embedded in a record editor using the property "canBeEmbeddedInRecordEditor".
      options: {
        canBeEmbeddedInRecordEditor: true
      },
      // It can be inserted in a record editor view component using "canBeInsertedInto".
      canBeInsertedInto(componentTypes: string[]): boolean {
        return componentTypes.includes(RxViewComponentType.RecordEditor);
      },
      component: SamplefieldcomponentComponent,
      designComponent: SamplefieldcomponentDesignComponent,
      designComponentModel: SamplefieldcomponentDesignModel,
      // List of the view component specific input parameters (here "foo").
      // They will be described with more details in the .model.ts file.
      //
      // Some properties are inherited from the base record editor field design defined in "IBaseRecordEditorFieldProperties":
      //    fieldId: string;
      //    label: string;
      //    disabled: string;
      //    hidden: string;
      //    value?: string;
      //    styles?: string;
      //
      // It is VERY IMPORTANT to add the view component custom properties to the common properties RX_BASE_FIELD_PROPERTIES.
      properties: RX_BASE_FIELD_PROPERTIES.concat([
        {
          name: 'message',
          enableExpressionEvaluation: true
        }
      ])
    });
  }
}
