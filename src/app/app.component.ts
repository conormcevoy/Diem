import { Component, OnInit } from '@angular/core';
import { getDate } from '../lib/diem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public ngOnInit(): void {
    const dateBoi = getDate();
    console.log('initalized');
    console.log(dateBoi);
  }
}
