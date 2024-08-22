import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { BaseViewComponent, IViewComponent } from '@helix/platform/view/runtime';
import { RxViewComponent } from '@helix/platform/view/api';
import { ISamplecaptchaParameters } from '../design/samplecaptcha.interface';

@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplecaptcha',
  styleUrls: ['./samplecaptcha.scss'],
  templateUrl: './samplecaptcha.component.html',
  imports: [CommonModule]
})
@RxViewComponent({
  name: 'com-fusiongbs-sampleappone-samplecaptcha',
})
export class SamplecaptchaComponent extends BaseViewComponent implements OnInit,IViewComponent {
  // Contains the view component instance id.
  guid: string;
  // Contains the view component configuration.
  config: Observable<any>;
  // Contains the view component instance parameters.
  inputParams: ISamplecaptchaParameters;

  // Implementing set property and refresh apis.
  api = {
    // This will be called when an input parameter is set by a button "set property" action.
    setProperty: this.setProperty.bind(this)
  };

  ngOnInit() {
    // Subscribing to input parameter changes.
    this.config.subscribe((config: ISamplecaptchaParameters) => {
      this.inputParams = config;
    });

    // Registering the custom set property and refresh implementations.
    this.notifyPropertyChanged('api', this.api);
  }


  // This method is triggered by a button "set property" action.
  setProperty(propertyPath: string, propertyValue: any): void | Observable<never>{
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
      default: {
        return throwError(`Samplecaptcha : property ${propertyPath} is not settable.`);
      }
    }
  }
}
