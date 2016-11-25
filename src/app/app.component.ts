import {Component, OnInit} from '@angular/core';
import {Speaker} from './index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  speaker: Speaker;

  ngOnInit() {
    this.initModel();
  }

  initModel() {
    this.speaker = new Speaker('', '');
  }

}
