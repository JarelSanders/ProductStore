import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

}

// scrolling navbar
document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = 100;
  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );
  if (distanceFromTop >= navbarHeight) navbar?.classList.add("fixed-top");
  else navbar?.classList.remove("fixed-top");
});

// declare var $: any;

// $(document).ready(function(){
//    const navbar = document.querySelector(".navbar");
//    const navbarHeight = 100;
//    const distanceFromTop = Math.abs(
//      document.body.getBoundingClientRect().top
//    );
//   ${'navbar'}.on('scroll', function (){
//     if ($(distanceFromTop >= $(navbarHeight))
//     $("navbar".classL))

//   })
// })