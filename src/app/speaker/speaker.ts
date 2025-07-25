import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-speaker',
  imports: [
    FaIconComponent,
    NgForOf
  ],
  templateUrl: './speaker.html',
  styleUrl: './speaker.scss'
})
export class Speaker {
  faLinkedin = faLinkedin;

  speakers = [
    {
      name: 'Milan Peschl',
      role: 'GAMES',
      image: 'img/speakers/peschl.jpg',
      linkedin: 'https://www.linkedin.com/in/milan-peschl/'
    },
    {
      name: 'Robert Bruckmayer',
      role: 'GAMES',
      image: 'img/speakers/bruckmayer.jpg',
      linkedin: 'https://www.linkedin.com/in/r-bruckmayer/'
    },
    {
      name: 'Zdenko Mago',
      role: 'GAMES',
      image: 'img/speakers/Zdenko-Mago.png',
      linkedin: 'https://www.linkedin.com/in/zdenko-mago-99123a108/'
    },
    {
      name: 'Michal Korchaník',
      role: 'TECH',
      image: 'img/speakers/Korchanik.jpg',
      linkedin: 'https://www.linkedin.com/in/korchanik/?originalSubdomain=sk'
    },
    {
      name: 'Rastislav Jelínek',
      role: 'GAMES',
      image: 'img/speakers/jelinek.jpg',
      linkedin: 'https://www.linkedin.com/in/rastislav-jelinek-460173135/?originalSubdomain=sk'
    },
    {
      name: 'Jaroslav Vyhnička',
      role: 'GAMES',
      image: 'img/speakers/vyhnicka.jpg',
      linkedin: 'https://www.linkedin.com/in/jaroslav-vyhnicka-021043135/'
    },
    {
      name: 'Gábor Szabó',
      role: 'GAMES',
      image: 'img/speakers/szabo.jpg',
      linkedin: 'https://www.linkedin.com/in/6boci/'
    },
    {
      name: 'Jan Rücker',
      role: 'GAMES',
      image: 'img/speakers/RUCKER.jpg',
      linkedin: 'https://www.linkedin.com/in/janrucker/?originalSubdomain=cz'
    },
    {
      name: 'Aleksander Kauch',
      role: 'GAMES',
      image: 'img/speakers/KRAUCH.jpg',
      linkedin: 'https://www.linkedin.com/in/aleksander-kauch-982a6a34/?originalSubdomain=pl'
    },
    {
      name: 'Roman Lipka',
      role: 'GAMES',
      image: 'img/speakers/LIPKA.jpg',
      linkedin: 'https://www.linkedin.com/in/herrroman/?originalSubdomain=sk'
    }
  ];

}
