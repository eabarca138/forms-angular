import { Component, Input } from '@angular/core';
import {ControlContainer, FormGroupDirective, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  viewProviders: [
    { 
      provide: ControlContainer, 
      useExisting: FormGroupDirective 
    }
  ]
})
export class InputComponent {
  @Input() label?: string;
  @Input() type?: string;
  @Input() name?: string;
  @Input() loginForm?: FormGroup;

}

