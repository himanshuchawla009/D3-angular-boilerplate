import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private chartData: Array<any>;

  constructor() {}

  ngOnInit() {
    
    setTimeout(() => {
      this.Data();

      
      setInterval(() => this.Data(), 3000);
    }, 1000);
  }

    Data() {
    this.chartData = [];
    for (let i = 1; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        i,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}