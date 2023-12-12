
const arr = ['aba', 'aa', 'ad', 'c', 'vcd'];

function maxArr (arr){
    if(arr.length===0 ){
        return [];
    }
    const maxLength = Math.max(...arr.map(str => str.length));
    const result =  [];
    arr.forEach(a => {
        if(a.length ===maxLength){
            result.push(a);
        }
        
    });
    return result;

}
console.log(maxArr(arr));
//========== BÀI 2==========

const users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]
//Trả về mảng các user có age > 25 và isStatus = true
const resultFind = [];
function findAgeAndisStatus(arr){
   return  (users.filter(user => user.age > 25 && user.isStatus === true));
}
const result = findAgeAndisStatus(users);
console.log(result);

//Trả về mảng các user có age tăng dần
function sortAge(users) {
    return users.slice().sort((a, b) => a.age - b.age);
}
const resultSort = sortAge(users);
console.log(resultSort);

//======= BÀI 3 ===========Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần===
const myArr = ["one", "two", "three", "one", "one", "three"];

function getCountElement(arr){
    const resultCount = {};

    arr.forEach(a =>{
        resultCount[a] =( (resultCount[a] || 0) +1);
    })
    return resultCount
}
console.log(getCountElement(myArr));