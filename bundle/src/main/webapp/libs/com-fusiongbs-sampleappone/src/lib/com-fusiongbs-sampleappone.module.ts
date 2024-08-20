import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxLocalizationService } from '@helix/platform/shared/api';
import * as defaultApplicationStrings from './i18n/localized-strings.json';
import { SampleactionActionModule } from './actions/sampleaction/sampleaction-action.module';
import { SamplecomponentRegistrationModule } from './view-components/samplecomponent/samplecomponent-registration.module';

@NgModule({
  imports: [CommonModule, SampleactionActionModule, SamplecomponentRegistrationModule]
})
export class ComFusiongbsSampleapponeModule {
  constructor(private rxLocalizationService: RxLocalizationService) {
    this.rxLocalizationService.setDefaultApplicationStrings(defaultApplicationStrings['default']);
  }
}
