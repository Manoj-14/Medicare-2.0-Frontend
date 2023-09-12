import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  loader: string;

  constructor(private location: Location) {
    let userRegExp = new RegExp('/user/*');
    if (userRegExp.test(this.location.path())) {
      this.loader = '../../../assets/images/loader/userLoader.gif';
    } else {
      this.loader = '../../../assets/images/loader/adminLoader.gif';
    }
  }

  ngOnInit(): void {}
}
