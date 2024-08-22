import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxLocalizationService } from '@helix/platform/shared/api';
import * as defaultApplicationStrings from './i18n/localized-strings.json';
import { SampleactionActionModule } from './actions/sampleaction/sampleaction-action.module';
import { SamplecomponentRegistrationModule } from './view-components/samplecomponent/samplecomponent-registration.module';
import { SamplefieldcomponentRegistrationModule } from './view-components/samplefieldcomponent/samplefieldcomponent-registration.module';
import { SamplestarcomponentRegistrationModule } from './view-components/samplestarcomponent/samplestarcomponent-registration.module';
import { SamplecaptchaRegistrationModule } from './view-components/samplecaptcha/samplecaptcha-registration.module';
import { SamplepictureRegistrationModule } from './view-components/samplepicture/samplepicture-registration.module';

@NgModule({
  imports: [CommonModule, SampleactionActionModule, SamplecomponentRegistrationModule, SamplefieldcomponentRegistrationModule, SamplestarcomponentRegistrationModule, SamplecaptchaRegistrationModule, SamplepictureRegistrationModule]
})
export class ComFusiongbsSampleapponeModule {
  constructor(private rxLocalizationService: RxLocalizationService) {
    this.rxLocalizationService.setDefaultApplicationStrings(defaultApplicationStrings['default']);
  }
}
