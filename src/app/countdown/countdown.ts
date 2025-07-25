import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.scss'
})
export class Countdown  implements OnInit, OnDestroy {
  targetDate = new Date('2025-09-17T00:00:00'); // your conference date

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private intervalId: any;

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.updateCountdown();
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.updateCountdown();
          this.cdr.detectChanges(); // Manually trigger view update
        });
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      this.days = this.hours = this.minutes = this.seconds = 0;
      clearInterval(this.intervalId);
      return;
    }


    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(this.seconds);
    console.log(this.minutes);
  }
}
