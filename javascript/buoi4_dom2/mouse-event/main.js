// document.addEventListener('click', function(event) {
//     console.log(event);
//    })
   
//    document.addEventListener('mousedown', function() {
//     console.log('mousedown');
//    })
   
//    document.addEventListener('mousemove', function() {
//     console.log('mousemove');
//    })
   
//    document.addEventListener('mouseup', function() {
//     console.log('mouseup');
//    })

//tạo sự kiện nhấn chuột để tạo hình tròn
document.addEventListener('click', function(event) {

    //xóa hình tròn
    const currentCircle = document.querySelector('.circle');
    //nếu tồn tại hình tròn thì xóa nó đi 
    if(currentCircle){
        currentCircle.parentElement.removeChild(currentCircle);
    }
   const circle = document.createElement('div');
   circle.classList.add('circle'); //tạo tên class cho div


   //gắn vị trí cho hình tròn(X- right, left, Y-top/button)
   console.log(event)
    circle.style.left = `${event.offsetX-50}px`; // đúng tâm hình tròn
    circle.style.top = `${event.offsetY-50}px`;
   //them vào dom
   document.body.appendChild(circle)
   })