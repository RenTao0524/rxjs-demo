(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('rxjs/Rx')) :
  typeof define === 'function' && define.amd ? define(['rxjs/Rx'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Rx));
})(this, (function (Rx) { 'use strict';

  var button = document.querySelector('button');
  Rx.Observable.fromEvent(button, 'click')
    .scan(count => count + 1, 0)
    .subscribe(count => console.log(`Clicked ${count} times`));

  // var button = document.querySelector('button');
  // console.log('button:', button)
  // Rx.Observable.fromEvent(button, 'click').subscribe(() => console.log('Clicked!'));

  // import Rx from 'rxjs/Rx';

  // Rx.Observable.of(1,2,3)

  // import { Observable} from 'rxjs/Observable';
  // import 'rxjs/add/observable/of';
  // import 'rxjs/add/operator/map';

  // Observable.of(1,2,3).map(x => x + '!!!'); // 等等

  // import { Observable } from 'rxjs/Observable';
  // import { of } from 'rxjs/observable/of';
  // import { map } from 'rxjs/operator/map';

  // Observable::of(1,2,3)::map(x => x + '!!!'); // 等等

}));
