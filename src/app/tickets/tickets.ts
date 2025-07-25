import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-tickets',
  imports: [
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './tickets.html',
  styleUrl: './tickets.scss'
})
export class Tickets {
  bgUrl = 'img/sector/ticketsBg2.png';
  tickets = [
    {
      title: 'Denný vstup #1',
      priceMain: '25',
      priceCurrency: '€',
      priceOld: null,
      features: [
        'Vstup platný len pre piatok alebo nedelu',
        'Jednodenný vstup',
      ],
      btnClass: 'price-btn',
      highlighted: false,
      ticketValue: '25€ Denný vstup #1',
    },
    {
      title: 'Full Pass',
      priceMain: '35',
      priceCurrency: '€',
      priceOld: '40',
      features: [
        'Vstup na celý festival pre vývojárov',
        'Prístup k zaujímavým prednáškam',
        'Osobnosti herného priemyslu',
        'Súťaže',
        'Herný kvíz',
      ],
      btnClass: 'price-btn',
      highlighted: true,
      ticketValue: '35€ Full Pass',
    },
    {
      title: 'Party Pass',
      priceMain: '60',
      priceCurrency: '€',
      priceOld: '70',
      features: [
        'Vstup na exkluzívnu Sector Party',
        'Osobnosti herného priemyslu',
        'Občerstvenie a Drinky',
        'Priateľská atmosféra',
        'Nezahŕňa cenu vstupenky',
      ],
      btnClass: 'price-btn',
      highlighted: true,
      ticketValue: '60€ Party Pass',
    },
    {
      title: 'Exhibitor Pass',
      priceMain: '10 / hod',
      priceCurrency: '€',
      priceOld: null,
      features: [
        'Priestor na výstavisku pre prezentáciu',
        'Zabezpečený HW a internet počas slotu',
        'Promo v programe NextGen XP',
        'Nezahŕňa cenu vstupenky',
      ],
      btnClass: 'price-btn',
      highlighted: false,
      ticketValue: '10€/hod Exhibitor',
    }
  ];

  // For modal display
  selectedTicket: string | null = null;

  openModal(ticketValue: string) {
    this.selectedTicket = ticketValue;
    // Logic to show modal - either toggle a variable or use Angular Material Dialog, or Bootstrap modal if used with its JS
  }

  closeModal() {
    this.selectedTicket = null;
  }
}
