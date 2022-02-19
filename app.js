//Word Count

let main = document.createElement("main");
let form = document.createElement("form");
let text = document.createElement("textarea");
let numCount = document.createElement("h1");
let title = document.createElement("h2");

title.innerHTML = "Number of letter's";
numCount.innerHTML = "0";

document.body.appendChild(main);
main.appendChild(form);
form.appendChild(text);
main.appendChild(title);
main.appendChild(numCount);

document.body.style.background = 'honeydew';
document.body.style.textAlign = 'center';
document.body.style.marginTop = '100px';

text.cols = 30;
text.rows = 10;


text.addEventListener("input", () => numCount.innerText = text.value.length);




//  Contact Me @ 
//  Ezehemmanuel62@gmail.com 
//  https://www.twitter.com/Ezehemmanuel62 