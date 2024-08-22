import { NgModule } from '@angular/core';
import { RxViewComponentRegistryService, ViewComponentPropertyType } from '@helix/platform/view/api';
import { SamplepictureComponent } from './runtime/samplepicture.component';
import { SamplepictureDesignComponent } from './design/samplepicture-design.component';
import { SamplepictureDesignModel } from './design/samplepicture-design.model';

@NgModule()
export class SamplepictureRegistrationModule {
  constructor(rxViewComponentRegistryService: RxViewComponentRegistryService) {
    rxViewComponentRegistryService.register({
      type: 'com-fusiongbs-sampleappone-samplepicture',
      name: 'Samplepicture',
      group: 'SampleApplication7',
      component: SamplepictureComponent,
      designComponent: SamplepictureDesignComponent,
      designComponentModel: SamplepictureDesignModel,
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
