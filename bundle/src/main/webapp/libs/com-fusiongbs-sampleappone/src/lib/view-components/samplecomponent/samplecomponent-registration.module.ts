import { NgModule } from '@angular/core';
import { RxViewComponentRegistryService, ViewComponentPropertyType } from '@helix/platform/view/api';
import { SamplecomponentComponent } from './runtime/samplecomponent.component';
import { SamplecomponentDesignComponent } from './design/samplecomponent-design.component';
import { SamplecomponentDesignModel } from './design/samplecomponent-design.model';

@NgModule()
export class SamplecomponentRegistrationModule {
  constructor(rxViewComponentRegistryService: RxViewComponentRegistryService) {
    rxViewComponentRegistryService.register({
      type: 'com-fusiongbs-sampleappone-samplecomponent',
      name: 'Samplecomponent',
      group: 'SampleApplication7',
      component: SamplecomponentComponent,
      designComponent: SamplecomponentDesignComponent,
      designComponentModel: SamplecomponentDesignModel,
      properties: [
        {
          name: 'styles',
          type: ViewComponentPropertyType.String
        },
        {
          name: 'hidden',
          enableExpressionEvaluation: true
        },
        {
          name: 'message',
          localizable: true,
          enableExpressionEvaluation: true
        },
        {
          name: 'messageType',
          enableExpressionEvaluation: true
        }
      ]
    });
  }
}
