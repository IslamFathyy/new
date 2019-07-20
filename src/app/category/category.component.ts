import { Component, OnInit } from '@angular/core';

declare var $:any;
import 'jquery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  myarray=
  [
    {productname:"T-Shirt",image:"./assets/imgs/shirt1.jpg",price:"55 EGP"},
    {productname:"T-Shirt",image:"./assets/imgs/shirt2.jpg",price:"100 EGP"},
    {productname:"T-Shirt",image:"./assets/imgs/shirt3.jpg",price:"120 EGP"},
    {productname:"T-Shirt",image:"./assets/imgs/shirt4.jpg",price:"169 EGP"},
    {productname:"T-Shirt",image:"./assets/imgs/shirt5.jpg",price:"134 EGP"},
    {productname:"T-Shirt",image:"./assets/imgs/shirt6.jpg",price:"220 EGP"},
  ]

  myarray2=
  [
    {productname:"Pants",image:"./assets/imgs/pants1.jpg",price:"145 EGP"},
    {productname:"Pants",image:"./assets/imgs/pants2.jpg",price:"125 EGP"},
    {productname:"Pants",image:"./assets/imgs/pants3.jpg",price:"200 EGP"},
    {productname:"Pants",image:"./assets/imgs/pants4.jpg",price:"105 EGP"},
    {productname:"Pants",image:"./assets/imgs/pants5.jpg",price:"195 EGP"},
    {productname:"Pants",image:"./assets/imgs/pants6.jpg",price:"210 EGP"},
  ]

  myarray3=
  [
    {productname:"Jackets",image:"./assets/imgs/jac1.jpg",price:"345 EGP"},
    {productname:"Jackets",image:"./assets/imgs/jac2.jpg",price:"325 EGP"},
    {productname:"Jackets",image:"./assets/imgs/jac3.jpg",price:"300 EGP"},
    {productname:"Jackets",image:"./assets/imgs/jac4.jpg",price:"305 EGP"},
    {productname:"Jackets",image:"./assets/imgs/jac5.jpg",price:"355 EGP"},
    {productname:"Jackets",image:"./assets/imgs/jac6.jpg",price:"370 EGP"},
  ]

  myarray4=
  [
    {productname:"Dress",image:"./assets/imgs/dress1.png",price:"345 EGP"},
    {productname:"Dress",image:"./assets/imgs/dress2.png",price:"325 EGP"},
    {productname:"Dress",image:"./assets/imgs/dress3.jpg",price:"300 EGP"},
    {productname:"Dress",image:"./assets/imgs/dress4.png",price:"305 EGP"},
    {productname:"Dress",image:"./assets/imgs/dress5.png",price:"355 EGP"},
    {productname:"Dress",image:"./assets/imgs/dress1.png",price:"370 EGP"},
  ]

  myarray5=
  [
    {productname:"Skirt",image:"./assets/imgs/skirt5.jpg",price:"345 EGP"},
    {productname:"Skirt",image:"./assets/imgs/skirt2.jpg",price:"325 EGP"},
    {productname:"Skirt",image:"./assets/imgs/skirt3.png",price:"300 EGP"},
    {productname:"Skirt",image:"./assets/imgs/skirt4.jpg",price:"305 EGP"},
    {productname:"Skirt",image:"./assets/imgs/skirt1.jpg",price:"355 EGP"},
    {productname:"Skirt",image:"./assets/imgs/skirt6.png",price:"370 EGP"},
  ]

  myarray6=
  [
    {productname:"Accessories",image:"./assets/imgs/acess1.jpg",price:"345 EGP"},
    {productname:"Accessories",image:"./assets/imgs/access2.png",price:"325 EGP"},
    {productname:"Accessories",image:"./assets/imgs/access3.jpg",price:"300 EGP"},
    {productname:"Accessories",image:"./assets/imgs/access4.jpg",price:"305 EGP"},
    {productname:"Accessories",image:"./assets/imgs/access5.jpg",price:"355 EGP"},
    {productname:"Accessories",image:"./assets/imgs/acess1.jpg",price:"370 EGP"},
  ]
  constructor() { }
  ngOnInit() {

    $(".my-menu li").click(function(){
      $("li").removeClass("active");
      $(this).addClass("active");
    })

    var x = document.getElementsByClassName("row");
    var y = document.getElementsByClassName("pro");
$(".pro").click(function(){

for(var i =0 ; i<y.length ;i++){
  $(y[i]).removeClass("active");
  $(".all").removeClass("active");
}

  for(var i=0 ; i<x.length ; i++){
    $(x[i]).hide();
    if( $(x[i]).attr('id') == $(this).attr('id')){
      $(x[i]).show();
      $(this).addClass("active");
    }
  }
  
  
})  
 
$(".all").click(function(){
  for(var i =0 ;i<y.length;i++){
    $(y[i]).removeClass("active");
  }
  for(var i=0 ; i<x.length ; i++){
    $(x[i]).show();
    $(".all").addClass("active");
   }})

  
   $(".men-btn").click(function(){
     $(".menu").toggle();
   })




  }
}