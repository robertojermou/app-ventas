import {Component, OnInit} from '@angular/core';
declare var device;
declare var AppVersion;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version: string;
  ngOnInit() {
    document.addEventListener('deviceready', () => {
      this.version = AppVersion.version;
      // alert(device.platform);
    }, false);
  }
}
