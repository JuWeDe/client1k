import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(100%)'
      })),
      transition(':enter', [
        animate('300ms ease-in', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class CookieConsentComponent implements OnInit {
  consentGiven: boolean = false;

  ngOnInit() {
  }

  acceptCookies() {
    localStorage.setItem('cookie-consent', 'accepted');
    this.consentGiven = true;
  }

  declineCookies() {
    localStorage.setItem('cookie-consent', 'declined');
    this.consentGiven = true;
  }

  hideNotification() {
    this.consentGiven = true;
  }
}
