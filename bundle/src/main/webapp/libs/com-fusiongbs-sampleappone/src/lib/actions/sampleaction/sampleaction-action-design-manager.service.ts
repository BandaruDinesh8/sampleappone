import { IViewActionDesignManager } from '@helix/platform/view/api';
import { IViewComponentDesignValidationIssue } from '@helix/platform/view/designer';
import { Observable, of } from 'rxjs';
import { IPlainObject } from '@helix/platform/shared/api';
import { Injectable } from '@angular/core';
import { ISampleactionActionDesignProperties } from './sampleaction-action.interface';

@Injectable()
export class SampleactionActionDesignManagerService implements IViewActionDesignManager<ISampleactionActionDesignProperties> {

  // This method will be called automatically to validate the input parameter values.
  validate(actionProperties: ISampleactionActionDesignProperties, propertyName: string): Observable<IPlainObject[]> {
    return of(this.validateInputParameters(actionProperties, propertyName));
  }

  // Custom validation : Validating each input parameter.
  private validateInputParameters(
    actionsParams: ISampleactionActionDesignProperties,
    issuePropertyName: string
  ): IViewComponentDesignValidationIssue[] {
  return [];
  }
}
