import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnDropContentDirective } from '../../directives/btn-drop-content.directive';

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule, BtnDropContentDirective],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.scss',
})
export class MainToolbarComponent {
  isNavOpen: boolean = false;
  isOpenBtnDropdown = false;
}
