import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {
  qrData: string = '';
  qrCodeUrl: string = '';

  updateQrData(): void {
    if (this.qrData) {
      this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(this.qrData)}&size=150x150`;
    } else {
      this.qrCodeUrl = '';
    }
  }
}
