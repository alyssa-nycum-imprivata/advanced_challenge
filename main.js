const articleElement = document.querySelector("#messages");

const section1 = document.createElement('section');
section1.className = "message";
section1.textContent = "HELLO";
articleElement.appendChild(section1);
const section2 = document.createElement('section');
section2.className = "message";
section2.textContent = "WORLD";
articleElement.appendChild(section2);
const section3 = document.createElement('section');
section3.className = "message";
section3.textContent = "I";
articleElement.appendChild(section3);
const section4 = document.createElement('section');
section4.className = "message";
section4.textContent = "AM";
articleElement.appendChild(section4);
const section5 = document.createElement('section');
section5.className = "message";
section5.textContent = "HERE";
articleElement.appendChild(section5);

console.log(articleElement);





