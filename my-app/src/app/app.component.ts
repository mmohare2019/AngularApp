import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Personal Library';

  constructor(private router: Router) {}

  seeList() {
    this.router.navigate(['/books']);
  }
}
