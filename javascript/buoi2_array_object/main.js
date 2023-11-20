let arr =[];
let number = [];

number[0]=1;
number[1] = "phượng";
number[2]=true;

let myArr=[1, 2, 3, 4, true, "phượng"];

for(let i=0; i<myArr.length; i++){
    console.log(myArr[i]);
}

myArr.forEach(value => {
    console.log(value);
});

for (const value of myArr) {
    console.log(value);
}

//thêm 1 giá trị vào mảnhg
myArr.push("A", "a");
console.log(myArr);
//xóa 1 phần tử trong mảng 
myArr.splice(4, 2, 10, 20, 30);
console.log(myArr)

//cắt thành 1 mảng mới từ 1 mảng bất kì
let subArr = myArr.slice(0, 4);
console.log(subArr);

//indexof: kiếm tra giá trị có tổn tại trong mảng hay ko
//lastindexof: trả về vị trí cuối cùng xuất kiện giá trị

//sort: 
//reveser: đảo ngược lại mảng 

let numbers =[2, 4, 6, 3, 1, 7, 9, 8, 11, 21];
console.log(numbers.sort( (a, b) => a-b));

console.log(numbers.reverse())

//Split: phân tách chuỗi thành mảng thông qua 1 kí tự nào đó.
//join: gộp các giá trị trong mảng thành 1 chuỗi duy nhất

let chars ="a-a-a-a-a-a-a-a";
let arrSplit = chars.split("-");
console.log(arrSplit)

let newChars = arrSplit.join("-");
console.log(" mảng mới" + newChars)

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [3, 2, 1];
console.log(arr1==arr2); //so sánh địa chỉ bộ nhớ
console.log(arr1==arr3);
// console.log(arr1==str);
// console.log(arr1=== str);
console.log(arr1== arr3.sort()); // so sánh tham chiếu tới mảng mới. 
console.log(arr3 == arr3.sort());
console.log(arr1==arr1.reverse());
console.log(arr1==arr1.reverse().sort());

//Bài 1: Viết function tìm số lớn nhất trong mảng

function findMax(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }
    return max;

}
let arr4=[1,2, 4, 6, 7, 9];
console.log("Số lớn nhất trong mảng là: " + findMax(arr4));
 
//bài 2:Bài 2: Viết function tìm số nhỏ nhất trong mảng

function findMin(arr){
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(min > arr[i]){
            min =arr[i];
        }
    }
    return min;

}
console.log("Số nhỏ nhất trong mảng là: " + findMin(arr4));
 
//Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function findNewArr(arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        let surplus = arr[i]%2;
        newArr.push(surplus);

    }
    return newArr;
}
console.log("Mảng số dư của mảng cũ chia 2: " + findNewArr(arr4));

//bai4: Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
//Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘aaaaaaaaaa’
function repeatString(stringa){
    let arr=[];
    for(let i=0; i<10; i++){
        arr.push(stringa);
    }
    let newArr = arr.join("");
    return newArr;
}
console.log(repeatString("a"));

//Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
//Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
function repeatStringNew(stringb){
    let arr =[];
    for(let i=0; i<10; i++){
        arr.push(stringb);
    }
    let newArr = arr.join("-");
    return newArr;
}
console.log(repeatStringNew("a"));

//Bài 6: Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không 
//(chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
function isSymmetricString(string){
   let arr = string.toLowerCase().split(" ");
     return arr === arr.reverse();
 }
 console.log(isSymmetricString("Race car"));

//  Bài 7: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể 
//(không tính số 0 đầu tiên).
// Ví dụ Array + sort
// 53751 -> 13557

function arrangeNumberMin(n) {

    let strN = n.toString();
    let digits = Array.from(strN, Number);  // Chuyển chuỗi thành một mảng các chữ số
    let sortedDigits = digits.sort((a, b) => a - b);    // Sắp xếp các chữ số
    if (sortedDigits[0] === 0) {     // Bỏ qua số 0 ở đầu tiên nếu có
        sortedDigits = sortedDigits.slice(1).concat(0);
    }
    let result = parseInt(sortedDigits.join(''));    // Chuyển mảng các chữ số thành số nguyên

    return result;
}
