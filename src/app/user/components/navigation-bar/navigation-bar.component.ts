import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isClose: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isClose = !this.isClose;
  }

}
