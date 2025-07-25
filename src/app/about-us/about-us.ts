import { Component } from '@angular/core';
import { faCalendar, faShoppingCart, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-about-us',
  imports: [
    FaIconComponent
  ],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {
  faCalendar = faCalendar;
  faShoppingCart = faShoppingCart;
  faMapMarker = faMapMarkerAlt;
}
