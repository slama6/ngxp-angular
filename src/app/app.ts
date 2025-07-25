import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navigation} from './navigation/navigation';
import {Slider} from './slider/slider';
import {Countdown} from './countdown/countdown';
import {Footer} from './footer/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AboutUs} from './about-us/about-us';
import {Speaker} from './speaker/speaker';
import {Colaboration} from './colaboration/colaboration';
import {Tickets} from './tickets/tickets';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation, Slider, Countdown, Footer, FontAwesomeModule, AboutUs, Speaker, Colaboration, Tickets],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NextGenXP_web');
}
