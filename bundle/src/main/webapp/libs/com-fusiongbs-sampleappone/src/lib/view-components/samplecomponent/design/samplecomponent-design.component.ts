import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SamplecomponentDesignModel } from './samplecomponent-design.model';

@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplecomponent-design',
  styleUrls: ['./samplecomponent-design.scss'],
  templateUrl: './samplecomponent-design.component.html',
  imports: [CommonModule, FormsModule],
})
export class SamplecomponentDesignComponent {
  @Input()
  model: SamplecomponentDesignModel;
}
