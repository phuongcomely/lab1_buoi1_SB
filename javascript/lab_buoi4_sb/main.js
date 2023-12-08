// let colors = [
//     '#3498db',
//     '#9b59b6',
//     '#e74c3c',
//     '#2c3e50',
//     '#d35400',
// ]
// const btn = document.getElementById('btn');

// document.getElementById('btn').addEventListener('click', function() {
//     for(let i = 1; i<=5; i++){
//         const box = document.createElement('div');
//         box.classList.add('box'); //tạo tên class cho div
//         //xóa khi kích vào box
//         box.addEventListener('click', function(){
//           this.remove();
//           updateCount();
//         })
     
//         //chọn màu ngẫu nhiên 
//         const randomColor = colors[Math.floor(Math.random()*colors.length)];
//         box.style.background = randomColor;
     
//         //gắn vị trí cho hình vuông(X- right, left, Y-top/button)
//         const currentSquare = document.querySelector('.box:last-child'); //lấy hình vuông trước đó nếu có
//         box.style.top = (currentSquare ? currentSquare.offsetTop + 120 : 0) +'px';
//         box.style.left = (currentSquare ? currentSquare.offsetLeft + 120 : 0) +'px';
     
         
//         //them vào dom
//         document.body.appendChild(box);
//     }

//     //tạo hình vuông
  
   
//    updateCount();

//    })

//    //cập nhật số box
//    function updateCount() {
//         const points = document.querySelector('.points');
//         const listBox = document.querySelectorAll('.box');
//         const countBox = listBox.length;
//         points.textContent = countBox;
//    }



const colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];
let currentColors = [...colors]; // let currentColors = colors.slice()

const btn = document.querySelector("#btn");
const pointsEl = document.querySelector(".points");
const boxesEl = document.querySelector(".boxes");

// render box;
const renderBox = (arr) => {
    let html = "";
    arr.forEach((color, index) => {
        html += `
            <div 
                class="box" 
                style="background-color: ${color}"
                onclick="removeBox(${index})"
            ></div>
        `;
    });
    boxesEl.innerHTML = html;

    // update total box
    pointsEl.innerHTML = arr.length;
}

// xóa box
const removeBox = (index) => {
    currentColors.splice(index, 1);
    renderBox(currentColors);
}

// thêm box
btn.addEventListener("click", () => {
    currentColors = [...currentColors, ...colors]; // currentColors = currentColors.concat(colors);
    renderBox(currentColors);
});

renderBox(currentColors);