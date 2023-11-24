const h1 = document.getElementById('heading');
h1.style.color ="red";
h1.style.textTransform="2";

//thay đổi màu chữ cho tất cả thẻ class 'para';
const paraL = document.querySelectorAll('p');
console.log(paraL);
paraL.forEach(para => {
    para.style.color='blue';
    para.style.fontSize='20px';
})
//Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
const para3 = document.querySelector("p:nth-child(4)");
console.log(para3);
para3.insertAdjacentHTML("afterend", '<a href="https://www.facebook.com/">Link đến Facebook</a>');

//Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
const title = document.getElementById("title");
title.innerText ="Đây là thẻ tiêu đề";

//Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const description = document.querySelector('.content .description');
console.log(description)

description.classList.add("text-bold");

//thay thế
const  buttonElement = document.createElement("button");
buttonElement.textContent = "Click me";
para3.parentNode.replaceChild(buttonElement, para3);

//Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let para2 = document.querySelector('.para-2');
let para2Clone = para2.cloneNode(true);
para2.parentNode.insertBefore(para2Clone, para2.nextSibling);

//Xóa thẻ có class=“para-1”
const para1 = document.querySelector('p:nth-child(2)');
console.log(para1)
document.body.removeChild(para1);