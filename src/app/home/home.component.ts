import { Component } from '@angular/core';
import { MainToolbarComponent } from "../shared/components/main-toolbar/main-toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainToolbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
