import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "folks , Let's lear Tap operator!";
  nums$ = of(1, 2, 3, 4, 5, 6);

  ngOnInit(): void {
    const subsrciption = this.nums$
      .pipe(tap(r => console.log(' Log ', r)))
      .subscribe(res => {
        console.log(' After subscr. ', res);
      });
  }
}
