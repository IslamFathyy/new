import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
declare var $:any;
import 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".nav-link").click(function(){
      $(".navbar-collapse").hide();
    })

    
    $(".navbar-toggler").click(function(){
      $(".navbar-collapse").toggle();
    })

  }


}
