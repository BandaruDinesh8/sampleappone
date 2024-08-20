import { NgModule } from '@angular/core';
import { RxViewActionRegistryService } from '@helix/platform/view/api';
import { SampleactionActionService } from './sampleaction-action.service';
import { SampleactionActionDesignManagerService } from'./sampleaction-action-design-manager.service';
import { SampleactionActionDesignModel } from './sampleaction-action-design-model.class';

@NgModule({
  providers: [SampleactionActionService, SampleactionActionDesignManagerService]
})
export class SampleactionActionModule {
  constructor(
    rxViewActionRegistryService: RxViewActionRegistryService,
    sampleactionActionService: SampleactionActionService,
    sampleactionActionDesignManagerService: SampleactionActionDesignManagerService
  ) {
    rxViewActionRegistryService.register({
      name: 'comFusiongbsSampleapponeSampleaction',
      label: 'Sample Action',
      // Service that will be executed at runtime.
      service: sampleactionActionService,
      // The design manager will validate the input parameters at design time.
      designManager: sampleactionActionDesignManagerService,
      // The output parameters are not defined in this file but
      // in the design model via the data dictionary.
      designModel: SampleactionActionDesignModel,
      // The input parameters will be defined in more details in the design-model file.
      parameters: [
        {
          name: 'message',
          label: 'Message',
          isRequired: true,
          enableExpressionEvaluation: true
        }
      ]
    })
  }
}
