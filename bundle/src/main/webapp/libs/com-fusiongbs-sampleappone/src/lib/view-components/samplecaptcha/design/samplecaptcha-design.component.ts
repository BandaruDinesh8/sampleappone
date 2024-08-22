import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { SamplecaptchaDesignModel } from './samplecaptcha-design.model';

@Component({
  standalone: true,
  selector: 'com-fusiongbs-sampleappone-samplecaptcha-design',
  styleUrls: ['./samplecaptcha-design.scss'],
  templateUrl: './samplecaptcha-design.component.html',
  imports: [CommonModule, FormsModule],
})
export class SamplecaptchaDesignComponent {
  @Input()
  model: SamplecaptchaDesignModel;
}
