!function(){window.matchMedia("(min-width: 800px)").matches&&function(){window.addEventListener("scroll",function(){var t,e,n,o=200,i=document.querySelectorAll(".content__section"),c=document.querySelectorAll(".sideBar__list a"),l=document.querySelectorAll(".sideBar__item");for(e=0;e<i.length;e++)if(o=i[e].offsetHeight,i[e].getBoundingClientRect().top<=o&&i[e].getBoundingClientRect().top<=o)for(t=0;t<c.length;t++)l[t].classList.contains("sideBar--scrollSpyActive")&&l[t].classList.remove("sideBar--scrollSpyActive"),""!==c[t].hash&&(n=i[e].getAttribute("id"),c[t].hash=="#"+n&&l[t].classList.add("sideBar--scrollSpyActive"))})}()}(),function(){function t(){(document.documentElement.scrollTop||document.body.scrollTop)>=60?(i.style.position="fixed",i.style.top="130px"):(i.style.position="absolute",i.style.top="200px")}function e(){o.scrollTop<400?t():n=window.setTimeout(t,300)}var n,o=document.getElementsByTagName("BODY")[0],i=document.getElementsByClassName("sidebar")[0];window.addEventListener("scroll",e)}(),function(){function t(t){t.preventDefault(),c=o(t),l<=c?e(l,c):n(l,c),null===document.getElementById("scrollTopButton")&&i()}function e(t,n){window.scroll(0,t);var o=setTimeout(function(){e(t,n)},5);t<=n?t+=25:clearTimeout(o)}function n(t,e){window.scroll(0,t);var o=setTimeout(function(){n(t,e)},5);e<=t?t-=25:clearTimeout(o)}function o(t){var e;t.target.getAttribute("href")&&(e=t.target.getAttribute("href").substring(1));for(var n=0;n<s.length;n++){if(e===s[n].getAttribute("id"))return s[n].offsetTop-140}}function i(){var t=document.getElementsByTagName("BODY")[0],e=document.createElement("DIV");e.innerHTML="TOP",e.setAttribute("id","scrollTopButton"),t.appendChild(e),e.classList.add("scrollTopActive"),setTimeout(function(){e.classList.add("scrollTopFadeIn")},0)}var c,l=0,s=document.querySelectorAll('[data-target="scroll"]'),r=document.querySelectorAll(".menu__item"),d=!0;window.addEventListener("scroll",function(){(l=window.pageYOffset)>300&&d&&(i(),d=!1)}),document.addEventListener("click",function(t){if("scrollTopButton"===t.target.getAttribute("id")){n(document.getElementsByTagName("BODY")[0].scrollTop,0)}});for(var a=0;a<r.length;a++)!function(e){if(r[e].classList.contains("no-scroll"))return!1;r[e].addEventListener("click",t)}(a)}(),function(){window.onload=function(){var t=window.matchMedia("(max-width: 770px)"),e=document.getElementById("project-link");console.log(e);var n=function(t){t.matches&&e.addEventListener("click",function(t){t.preventDefault()})};t.addListener(n),n(t),window.matchMedia("(max-width: 770px)").matches&&e.addEventListener("click",function(t){console.log("clicked"),t.preventDefault()})}}();