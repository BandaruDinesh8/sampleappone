import { Component, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadOnlyFieldModule } from '@helix/platform/ui-kit';
import { AdaptRxTextfieldModule } from '@bmc-ux/adapt-angular';
import { IViewComponent } from '@helix/platform/view/runtime';
import { BaseRecordEditorFieldComponent } from '@helix/platform/view/components';
import { RxFieldDefinitionService } from '@helix/platform/record/api';
import { RxViewComponent } from '@helix/platform/view/api';
import { ISamplefieldcomponentRuntimeProperties } from '../design/samplefieldcomponent.interfaces';

// A Record Field View component extends BaseRecordEditorFieldComponent.
@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplefieldcomponent',
  styleUrls: ['./samplefieldcomponent.scss'],
  templateUrl: './samplefieldcomponent.component.html',
  imports: [CommonModule, ReadOnlyFieldModule, AdaptRxTextfieldModule, ReactiveFormsModule]
})
@RxViewComponent({
  name: 'com-fusiongbs-sampleappone-samplefieldcomponent',
})
export class SamplefieldcomponentComponent extends BaseRecordEditorFieldComponent implements IViewComponent {
  maxLength: number;

  constructor(injector: Injector,
              private rxFieldDefinitionService: RxFieldDefinitionService) {
    super(injector);
  }

  onConfigInitialized(config: ISamplefieldcomponentRuntimeProperties): void {
    super.onConfigInitialized(config);

    if (this.fieldDefinition.maxLength && !this.rxFieldDefinitionService.isSystemField(this.fieldDefinition)) {
      this.maxLength = this.fieldDefinition.maxLength;
    }
  }
}
