import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  post: string = 'support@z-it.net';
  isEmailHighlighted = false;
  showFooter: boolean = true;
  router: any;

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      console.log('Email copied to clipboard:', text);
      // Можно добавить какое-то уведомление об успешном копировании
    }, err => {
      console.error('Failed to copy email:', err);
    });
  }

  highlightEmail(isHighlighted: boolean): void {
    this.isEmailHighlighted = isHighlighted;
  }
  ngOnInit(): void {
    this.showFooter = this.router.url === '/';
    this.router.events.subscribe((val: any) => {
      this.showFooter = this.router.url === '/';
    });
  }

}


