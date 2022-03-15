import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ng-ecam49';
pleinEcran(){
    if(! window.document.fullscreenElement)
    window.document.body.requestFullscreen();
    //screen.orientation.lock('portrait');
  }

}
