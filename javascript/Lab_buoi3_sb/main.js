const text=document.getElementById('text');
console.log(text);
text.style.color = '#777';
text.style.fontSize = '2rem';
text.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'

const ul = document.querySelectorAll('li');
console.log(ul)
for( var i =0; i<3; i++){
    ul[i].style.color ='blue';
}
   


const listUl = document.getElementById('list');
for(var i =8; i<=10; i++){
    const liElement = document.createElement('li');
    liElement.textContent = "Item"+i;
    listUl.appendChild(liElement);
}
const listLi = listUl.querySelectorAll('li');
 const item1= listLi[0];
 console.log(item1);
 item1.style.color = "red";
  
 const item3 = listLi[2];
 item3.style.backgroundColor='blue';

 const item4 = listLi[3];
 listUl.removeChild(item4);

 item3.insertAdjacentHTML('afterend', '<li> item 4 mới </li>')

