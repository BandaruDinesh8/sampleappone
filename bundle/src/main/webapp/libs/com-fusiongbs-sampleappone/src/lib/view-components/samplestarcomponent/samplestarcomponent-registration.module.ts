import { NgModule } from '@angular/core';
import { RxViewComponentRegistryService, ViewComponentPropertyType } from '@helix/platform/view/api';
import { SamplestarcomponentComponent } from './runtime/samplestarcomponent.component';
import { SamplestarcomponentDesignComponent } from './design/samplestarcomponent-design.component';
import { SamplestarcomponentDesignModel } from './design/samplestarcomponent-design.model';
import { AdaptRxRatingModule } from '@bmc-ux/adapt-angular';

@NgModule({
  imports:[AdaptRxRatingModule]
})
export class SamplestarcomponentRegistrationModule {
  constructor(rxViewComponentRegistryService: RxViewComponentRegistryService) {
    rxViewComponentRegistryService.register({
      type: 'com-fusiongbs-sampleappone-samplestarcomponent',
      name: 'Samplestarcomponent',
      group: 'SampleApplication7',
      component: SamplestarcomponentComponent,
      designComponent: SamplestarcomponentDesignComponent,
      designComponentModel: SamplestarcomponentDesignModel,
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
        }
      ]
    });
  }
}
