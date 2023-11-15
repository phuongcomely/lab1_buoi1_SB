//=============LAB2: IF/ELSE=========

function check(mark) {
    if (mark >= 85) {
        console.log("A");
    } else if (mark >= 70 && mark < 85) {
        console.log("B");
    } else if (mark >= 40 && mark < 70) {
        console.log("C");
    } else {
        console.log("D");
    }
}


// ============== LAB3 ============
let day = 3;
switch(day) {
    case 0:
        console.log('Chủ nhật')
        break;
    case 1:
        console.log('Thứ 2');
        break;
    case 2:
        console.log('Thứ 3')
        break;
    case 3:
        console.log('Thứ 4')
        break;
    case 4:
        console.log('Thứ 5')
        break; 
    case 5:
        console.log('Thứ 6')
        break;
    case 6:
        console.log('Thứ 7')
        break;
}

//============ LAB4 ========/
//BÀI 1

function repeatString(char) {
    let addchar ='';
    for(let i=0; i<=10; i++){
        addchar = addchar+char;
    }
    return addchar;
}
console.log(repeatString('a'))

//BÀI 2
function repeatString1(char1) {
    let addchar ='a';
    for(let i=0; i<10; i++){
        addchar = addchar+ '-' + char1;
    }
    return addchar;
}
console.log(repeatString1('a'))

//BÀI 3:
function repeatString3(char2, a){
    if(n<=1){
        return "Số nguyên a phải lớn hơn 1"
    }
    let addchar = "";
    for(let i=0; i<=a; i++){
        addchar = addchar+ "-"+char2;
    }
    return addchar;
}
console.log(repeatString3('a', 5));