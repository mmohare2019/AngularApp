import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Personal Library';

  constructor() {}
}
