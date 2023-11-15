function calculateFactorial(n){
    let factorial =n;
    for(let i=n-1; i>0; i--){
        factorial = factorial * i
    }
    return factorial;
}
console.log(calculateFactorial(5));

//bai2
function reverseString(a){
    let reverseChain ='';
    for(let i = a.length-1; i>=0; i--){
        reverseChain = reverseChain + a[i];
    }
    return reverseChain;
}
console.log(reverseString('Hello'))

//bai3
function translate(country){
    switch(country){
        case 'VN': 
            console.log('Xin chào')
            break;
        case 'EN': 
            console.log('Hello')
            break;
        case 'JP':
            console.log('konnichiwa doumo')
            break
        default:
            console.log('Quốc gia chưa có trong hệ thống!')
            break;

    }

}
translate('VN');

function subString(chain){
    let resultChain = '';
    for(let i=0; i<chain.length; i++){
        if(i<10){
            resultChain = resultChain + chain[i];
        }else{
            resultChain = resultChain +'.';
        }
    }
    return resultChain;
}
console.log(subString('xinchaocacbandenvoiIT'))