const fragment = document.createDocumentFragment();

// const articleElement = document.querySelector("#messages");

const section1 = document.createElement('section');
section1.className = "message";
section1.textContent = "HELLO";
fragment.appendChild(section1);
const section2 = document.createElement('section');
section2.className = "message";
section2.textContent = "WORLD";
fragment.appendChild(section2);
const section3 = document.createElement('section');
section3.className = "message";
section3.textContent = "I";
fragment.appendChild(section3);
const section4 = document.createElement('section');
section4.className = "message";
section4.textContent = "AM";
fragment.appendChild(section4);
const section5 = document.createElement('section');
section5.className = "message";
section5.textContent = "HERE";
fragment.appendChild(section5);

document.querySelector("#messages").appendChild(fragment);

// console.log(articleElement);








