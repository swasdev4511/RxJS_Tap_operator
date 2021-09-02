import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = "folks , Let's learn Tap operator!";
  nums$ = of(1, 2, 3, 4, 5, 6, 7, 8);
  transformedObservables: Observable<string>;
  subscription: Subscription;

  ngOnInit(): void {
    this.transformedObservables = this.nums$.pipe(
      tap(r => console.log(' Log ', r)),
      map(r => ` Result : ${r * 3}`),
      take(4)
    );
    this.subscription = this.transformedObservables.subscribe(res =>
      console.log(res)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
