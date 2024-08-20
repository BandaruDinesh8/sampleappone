import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { BaseViewComponent, IViewComponent } from '@helix/platform/view/runtime';
import { RxViewComponent } from '@helix/platform/view/api';
import { ISamplecomponentParameters } from '../design/samplecomponent.interface';
import { RxLogService, RxNotificationService } from '@helix/platform/shared/api';

@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplecomponent',
  styleUrls: ['./samplecomponent.scss'],
  templateUrl: './samplecomponent.component.html',
  imports: [CommonModule]
})
@RxViewComponent({
  name: 'com-fusiongbs-sampleappone-samplecomponent',
})
export class SamplecomponentComponent extends BaseViewComponent implements OnInit, IViewComponent {
  // Contains the view component instance id.
  guid: string;
  // Contains the view component configuration.
  config: Observable<any>;
  // Contains the view component instance parameters.
  inputParams: ISamplecomponentParameters;

  // Implementing set property and refresh apis.
  api = {
    // This will be called when an input parameter is set by a button "set property" action.
    setProperty: this.setProperty.bind(this)
  };

  constructor(private rxLogService: RxLogService, private rxnotification: RxNotificationService) {
    super();
  }

  ngOnInit() {
    // Subscribing to input parameter changes.
    this.config.subscribe((config: ISamplecomponentParameters) => {
      this.inputParams = config;
    });

    // Registering the custom set property and refresh implementations.
    this.notifyPropertyChanged('api', this.api);
  }


  // This method is triggered by a button "set property" action.
  setProperty(propertyPath: string, propertyValue: any): void | Observable<never> {
    switch (propertyPath) {
      case 'hidden': {
        this.inputParams.hidden = propertyValue;
        this.notifyPropertyChanged(propertyPath, propertyValue);
        break;
      }
      case 'message': {
        this.inputParams.message = propertyValue;
        break;
      }
      case 'message': {
        this.rxnotification.addInfoMessage(propertyValue);
        this.inputParams.message = propertyValue;
        break;
      }
      default: {
        this.rxLogService.warning(`Samplecomponent: property ${propertyPath} is not settable`)
        this.rxnotification.addWarningMessage(`Samplecomponent: property ${propertyPath} is not settable`)
        return throwError(`Samplecomponent : property ${propertyPath} is not settable.`);
      }
    }
  }
}
