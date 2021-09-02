import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { map, reduce, take, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = "folks , Let's learn Tap operator!";
  nums$ = of(1, 2, 3, 4, 5, 6, 7, 8);
  transformedObservables: Observable<any>;
  subscription: Subscription;

  ngOnInit(): void {
    this.transformedObservables = this.nums$.pipe(
      tap(r => console.log(' Log - I ', r)),
      map(r => r * 3),
      tap(r => console.log(' Log - II ', r)),
      take(4),
      reduce((acc, curr) => acc + curr, 0),
      map(r => `Sum is ${r}`)
    );
    this.subscription = this.transformedObservables.subscribe(res =>
      console.log(res)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
