const nav=document.querySelector(".main-navigation"),links=document.querySelectorAll("nav a"),main=document.querySelector("#menu-mobile"),btnBurguerContainer=document.querySelector("#btn-burguer-container"),btnBurguer=document.querySelector("#btn-burguer"),mainItems=document.querySelectorAll("#main-item"),carousel=document.querySelector(".custom-carousel");function btnBurguerFn(){btnBurguerContainer.addEventListener("click",e=>{btnBurguerContainer.classList.toggle("active"),main.classList.toggle("hidden")})}function scrollNav(){links.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),document.querySelector(e.target.attributes.href.value).scrollIntoView({behavior:"smooth"})})})}function showCarousel(e){var a=e.querySelector("figure"),o=a.children,t=o.length,i=e.dataset.gap||0,c="bfc"in e.dataset,u=2*Math.PI/t,l=0;function r(e,t){var r=t/(2*Math.tan(Math.PI/e));a.style.transformOrigin=`50% 50% ${-r}px`;for(var n=0;n<e;n++)o[n].style.padding=i+"px";for(n=1;n<e;n++)o[n].style.transformOrigin=`50% 50% ${-r}px`,o[n].style.transform=`rotateY(${n*u}rad)`;if(c)for(n=0;n<e;n++)o[n].style.backfaceVisibility="hidden";a.style.transform=`rotateY(${l*-u}rad)`}r(t,parseFloat(getComputedStyle(o[0]).width)),window.addEventListener("resize",()=>{r(t,parseFloat(getComputedStyle(o[0]).width))}),document.querySelector(".prev").addEventListener("click",()=>{l--,a.style.transform=`rotateY(${l*-u}rad)`}),document.querySelector(".next").addEventListener("click",()=>{l++,a.style.transform=`rotateY(${l*-u}rad)`})}document.addEventListener("DOMContentLoaded",function(){btnBurguerFn(),scrollNav(),showCarousel(carousel)}),mainItems.forEach(e=>{e.addEventListener("click",()=>{main.classList.add("hidden"),btnBurguer.classList.remove("active")})});