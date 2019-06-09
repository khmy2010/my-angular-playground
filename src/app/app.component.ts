import { Component } from '@angular/core';
import { RouteConstant } from 'src/constant/route.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  RouteConstant = RouteConstant;

  showBurgerMenu: boolean = false;

  toggleBurger() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }

  closeBurger() {
    this.showBurgerMenu = false;
  }
}
