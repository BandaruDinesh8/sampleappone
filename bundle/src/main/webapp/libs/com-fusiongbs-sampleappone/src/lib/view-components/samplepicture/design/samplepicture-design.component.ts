import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SamplepictureDesignModel } from './samplepicture-design.model';

@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplepicture-design',
  styleUrls: ['./samplepicture-design.scss'],
  templateUrl: './samplepicture-design.component.html',
  imports: [CommonModule, FormsModule],
})
export class SamplepictureDesignComponent {
  @Input()
  model: SamplepictureDesignModel;
}
