import { NgModule } from '@angular/core';
import { RxViewComponentRegistryService, ViewComponentPropertyType } from '@helix/platform/view/api';
import { SamplecaptchaComponent } from './runtime/samplecaptcha.component';
import { SamplecaptchaDesignComponent } from './design/samplecaptcha-design.component';
import { SamplecaptchaDesignModel } from './design/samplecaptcha-design.model';

@NgModule()
export class SamplecaptchaRegistrationModule {
  constructor(rxViewComponentRegistryService: RxViewComponentRegistryService) {
    rxViewComponentRegistryService.register({
      type: 'com-fusiongbs-sampleappone-samplecaptcha',
      name: 'Samplecaptcha',
      group: 'SampleApplication7',
      component: SamplecaptchaComponent,
      designComponent: SamplecaptchaDesignComponent,
      designComponentModel: SamplecaptchaDesignModel,
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
