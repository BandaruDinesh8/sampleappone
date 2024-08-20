import { Injectable } from '@angular/core';
import { IViewActionService } from '@helix/platform/view/api';
import { EMPTY, from, Observable, throwError } from 'rxjs';
import { RX_MODAL, RxModalService } from '@helix/platform/ui-kit';
import { switchMap } from 'rxjs/operators';
import { RxViewAction } from '@helix/platform/view/api';
import { ISampleactionActionProperties } from './sampleaction-action.interface';

// any type is necessary here due to the use of AdaptModalService.
@Injectable()
@RxViewAction({
  name: 'comFusiongbsSampleapponeSampleaction',
})
export class SampleactionActionService implements IViewActionService<ISampleactionActionProperties, any> {
  constructor(private rxModalService: RxModalService) {}

  // Method automatically executed at runtime.
  // inputParameters will contain the different Input parameter values.
  // This method must return an Observable, here of tye "any" due to the use
  // of rxModalService.confirm.
  execute(inputParameters: ISampleactionActionProperties): Observable<any> {
    // rxModalService.confirm is a promise, returning a boolean.
    return from(this.rxModalService.confirm({
      title: 'default',
      modalStyle: RX_MODAL.modalStyles.warning,
      message: inputParameters.message
    })).pipe(
      // We need to trap the result of the confirmation window and return an EMPTY observable in case
      // of confirmation or throw an error if not.
      // Throwing an error will cancel the next actions.
      switchMap((result: boolean) => {
        if (result) {
          return EMPTY;
        } else {
          return throwError(null);
        }
      })
    );
  }
}
