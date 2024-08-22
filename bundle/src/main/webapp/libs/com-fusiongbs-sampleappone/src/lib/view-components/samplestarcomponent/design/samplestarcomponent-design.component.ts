import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SamplestarcomponentDesignModel } from './samplestarcomponent-design.model';

@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplestarcomponent-design',
  styleUrls: ['./samplestarcomponent-design.scss'],
  templateUrl: './samplestarcomponent-design.component.html',
  imports: [CommonModule, FormsModule],
})
export class SamplestarcomponentDesignComponent {
  @Input()
  model: SamplestarcomponentDesignModel;

  starValue;
  
  onRateChange(value:number): void {
    console.log(value);
  }
}
