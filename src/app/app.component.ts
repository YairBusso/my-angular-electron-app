import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComp1Component } from "./comps/my-comp1/my-comp1.component";
import { MyComp2Component } from "./comps/my-comp2/my-comp2.component";
import { MyComp3Component } from "./comps/my-comp3/my-comp3.component";
import { MyComp4Component } from "./comps/my-comp4/my-comp4.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MyComp1Component, MyComp2Component, MyComp3Component, MyComp4Component]
})
export class AppComponent {
  title = 'my-angular-electron-app';
}
