import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {}


// import { Component } from '@angular/core';
// import { StocksService, StockInterface } from './services/stocks.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'stocks';
//   stocks: Array<StockInterface>;

//   constructor (service: StocksService) {
//     service.load(['AAPL']).subscribe(stocks => {
//       this.stocks = stocks;
//     })
//   }
// }
