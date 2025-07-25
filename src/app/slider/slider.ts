import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [
    NgStyle
  ],
  templateUrl: './slider.html',
  styleUrl: './slider.scss'
})
export class Slider {
  bgUrl = 'img/sector/mainBanner.png';
}
