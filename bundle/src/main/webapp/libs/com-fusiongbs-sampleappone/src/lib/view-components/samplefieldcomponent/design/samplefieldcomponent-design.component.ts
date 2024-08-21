import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AdaptRxTextfieldModule } from '@bmc-ux/adapt-angular';
import { SamplefieldcomponentDesignModel } from './samplefieldcomponent-design.model';

@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplefieldcomponent-design',
  styleUrls: ['./samplefieldcomponent-design.scss'],
  templateUrl: './samplefieldcomponent-design.component.html',
  imports: [CommonModule, FormsModule, AdaptRxTextfieldModule]
})
export class SamplefieldcomponentDesignComponent {
  @Input()
  model: SamplefieldcomponentDesignModel;
}
