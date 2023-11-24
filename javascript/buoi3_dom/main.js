const heading = document.getElementById('heading');
console.log(heading)
//thay đổi màu cho heading

heading.style.color='black';
heading.style.backgroundColor='red';
heading.style.fontSize='13';

//gọi element 
const paraList = document.querySelectorAll('p');
console.log(paraList);
paraList.forEach(para => {
    para.style.color='gray';

})
const para1= document.querySelector('p');
console.log(para1)
const para2 = document.querySelector( 'p:nth-child(2)')
console.log(para2)
const para3 = document.querySelector( 'p:nth-child(3)')
console.log(para3)

//get/set text content
console.log(heading.innerText);
heading.innerText = 'H1 đã được thay thế';
// heading.innerHTML='<span> Đây là H1</span>';

//insert
const body = document.body;
// CÁCH 1: document.body.insertBefore(para3, para1);
para1.insertAdjacentElement('beforebegin', para3)

//insert button "click me" vào giữa p1, p2
const btn = document.createElement('button');
btn.innerText="Click me"
console.log(btn);
document.body.insertBefore(btn, para1);

//para1.insertAdjacentElement("afterend", "<button>Click me</button>")
//XÓA
document.body.removeChild(para1);

//para1.parentElement: Lấy cha của p1

// thay thế
const input = document.createElement('input');
input.type = 'text';
input.placeholder = "Enter your name";
para3.parentElement.replaceChild(input, para3);

//sao chép phần tử DOM
 //=== SỬ DỤNG cloneNode(true/false)== true thì lấy cả phần tử con, false chỉ lấy phần tử chỉ định ====

 //ClassList

 const para4 = document.querySelector('p:nth-child(4)');
 para4.classList.add('text-red', 'text-bold', 'text-big');
 console.log(para4.classList.contains('text-red'));

 //classList toggle: có thể sử dụng để thay đổi màu liên tục cho 1 element 

 setInterval(()=>{
    para4.classList.toggle("text-red");
 }, 1000);

