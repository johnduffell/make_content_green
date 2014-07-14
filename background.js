
var contentHeight = document.documentElement.scrollHeight
var viewHeight = window.innerHeight
var scrollbarHeight = viewHeight * viewHeight / contentHeight;

var articleBody = document.getElementsByClassName('js-article__body')[0];
var endOfArticle = articleBody.offsetTop + articleBody.offsetHeight;

var marker1 = articleBody.offsetTop * viewHeight / contentHeight

var delta = articleBody.offsetHeight * viewHeight / contentHeight

var marker2 = endOfArticle * viewHeight / contentHeight

var upper=document.createElement("green");
upper.style.backgroundColor="red"
upper.style.position="fixed"
upper.style.top=0
upper.style.height= marker1 + "px"
upper.style.right="0px"
var topD=document.createTextNode("...");
upper.appendChild(topD);
document.body.appendChild(upper);

var btn=document.createElement("div");
btn.style.backgroundColor="green"
btn.style.position="fixed"
btn.style.top=marker1 + "px"
btn.style.height= delta + "px"
btn.style.right="0px"
var t=document.createTextNode("...");
btn.appendChild(t);
document.body.appendChild(btn);

var lower=document.createElement("div");
lower.style.backgroundColor="red"
lower.style.position="fixed"
lower.style.top=marker2 + "px"
lower.style.height= (viewHeight - marker2) + "px"
lower.style.right="0px"
var tL=document.createTextNode("...");
lower.appendChild(tL);
document.body.appendChild(lower);

var scrollBar=document.createElement("div");
scrollBar.id = "asdfasdf"
scrollBar.style.border="1px black"
scrollBar.style.backgroundColor="white"
scrollBar.style.position="fixed"
scrollBar.style.top=0
scrollBar.style.height= scrollbarHeight + "px"
scrollBar.style.right="0px"
var sbPad=document.createTextNode("..");
scrollBar.appendChild(sbPad);
document.body.appendChild(scrollBar);

window.onscroll = doThisStuffOnScroll;

function doThisStuffOnScroll() {
console.log((window.pageYOffset * viewHeight / contentHeight) + "px");
var your_div = document.getElementById('asdfasdf');
  your_div.style.top=(window.pageYOffset * viewHeight / contentHeight) - (scrollbarHeight * window.pageYOffset / contentHeight) + "px"
}

document.body.style.backgroundColor="grey"
