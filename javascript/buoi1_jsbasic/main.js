console.log("Hello word"); //có thể sử dụng dấu kép hoặc đơn
document.write('Hello Word');

//js: kiểu dữ liệu của biển là động
// khai báo biến và không gán giá trị cho biến 

let age ;
//console.log(age); //undefines
age = 35;

let email = 'phuong@gmail.com';

const PI = 3.14; //hằng số mặc định 

let name = 'Phuong';
let year =2001;
console.log(`Ten toi la ${name} nam nay toi ${2023-year} tuoi`);
console.log('Ten toi la' + name + 'nam nay toi' +2023-year + ' tuoi');
 let fullName = 'Hoang Thi Phuong';
 let birthYear = 2001;

let person = 'xin chào mọi người toi tên là ' + fullName +' năm nay tôi ' + birthYear;
console.log(person);

//function 

function sum(a, b){
    return a+b;
}
console.log(sum(3, 4))

//cách 2: function expression

const sum2 = function(a, b){
    return a+b;
}
console.log(sum2(4, 5))

//cách 3: arrow function - es6
const sum3 =(a, b) =>{
    console.log(a, b)
    return a+b;
}
//Hoặc
const sum4=(a, b)=>a+b; //áp dụng cho function chứa 1 câu lệnh 

console.log(sum3(5, 6));
console.log(sum3(6));
console.log(sum3());
// trường hợp gán giá trị mặc định cho tham số
const sum5 =(a=10, b=12) =>{
        console.log(a, b)
    return a+b;
}
console.log(sum5(2, 3));
console.log(sum5(2)); //khi đối số của function thiếu tự động đối số sẽ được lấy giá trị mặc định 
console.log(sum5());

console.log(2 =='2') //convert chuỗi sang số Number('2');
console.log(2 ==='2') //so sánh kiểu dữ liệu + giá trị
console.log(1+'0'); //trả về chuỗi
console.log('9'/3); 
console.log(9 /'3'); //nếu dấu - * / thì các chuỗi sẽ convert thành number

