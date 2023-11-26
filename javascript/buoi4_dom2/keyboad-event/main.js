document.addEventListener('keydown', function(event){
console.log(event)
if(event.keyCode == 13){
    drawCircle();

}else if(event.keyCode ==32){
    drawSquare();
}else{
    changeBackgroud();
}

})
const randomPosition=(min, max)=>{
    return Math.floor(Math.random() * (max -min +1)+min);
}
const drawCircle =()=>{
    //xóa hình tròn
    const currentCircle = document.querySelector('.circle');
    //nếu tồn tại hình tròn thì xóa nó đi 
    if(currentCircle){
        currentCircle.parentElement.removeChild(currentCircle);
    }
   const circle = document.createElement('div');
   circle.classList.add('circle'); //tạo tên class cho div


//    //gắn vị trí cho hình tròn(X- right, left, Y-top/button)
   console.log()
   
    circle.style.left = `${randomPosition(0, 1000)}px`; // đúng tâm hình tròn
    circle.style.top = `${randomPosition(0, 600)}px`;
   //them vào dom
   document.body.appendChild(circle)
}

const drawSquare = ()=>{
    const currentSquare = document.querySelector('.square');
    //nếu tồn tại hình tròn thì xóa nó đi 
    if(currentSquare){
        currentSquare.parentElement.removeChild(currentSquare);
    }
   const square = document.createElement('div');
   square.classList.add('square'); //tạo tên class cho div
   square.style.left = `${randomPosition(0, 1300)}px`;
   square.style.top =  `${randomPosition(0, 600)}px`
   document.body.appendChild(square)
}
 const changeBackgroud = ()=>{
    var randomColor = randomRGBColor();

 // Thay đổi màu nền của trang web
    document.body.style.backgroundColor = randomColor;
 }
 //hàm tạo màu ngẫu nhiên 
 const randomRGBColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};