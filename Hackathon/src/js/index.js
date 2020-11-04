import 'bootstrap';
import '../css/style.scss';
import '../assets/device-section-1.png';
import '../assets/devices-section-3.png';
import '../assets/logo.png';
import '../assets/apple.png';
import '../assets/googleplay.png';
import '../assets/icon-instagram.png';
import '../assets/icon-twitter.png';
import '../assets/icon-linkedin.png';
import '../assets/icon-facebook.png';
import '../assets/mini-logo.png';
import {iconDom, iconLibrary} from '../js/icons';


//scroll effects

window.onscroll = function() {myFunction()};

let backTop = document.querySelector("#backTop");
backTop.style.opacity = 0;

document.addEventListener('scroll', ()=> {
    if(document.documentElement.scrollTop === 0 || document.documentElement.scrollTop < 400) {
        backTop.style.opacity = 0;
    } else {
        backTop.style.opacity = 1;
    }
})

// function myFunction() {
//   if (document.body.scrollTop < 350 || document.documentElement.scrollTop < 350) {
//       backTop.style.opacity = 0;
//   }
//   else {
//     backTop.style.opacity = ;
//   }
// }




