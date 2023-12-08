

const promise = new Promise((resolve, reject)=>{}); //khởi tạo
console.log(promise);

const promiseSuccess = new Promise((resolve, reject)=>{
    resolve('Mua xe thành công ')
});
console.log(promiseSuccess);

    // const promiseFail = new Promise((resolve, reject)=>{
    //     reject('Mua xe thất bại ')
    // });
//console.log(promiseFail);

//KẾT QUẢ CHẠY CỦA 3 TRƯỜNG HỢP 

// //Promise {<pending>}
// [[Prototype]] : Promise
// [[PromiseState]]: "pending"
// [[PromiseResult]] :  undefined

// Promise {<fulfilled>: 'Mua xe thành công '}
// [[Prototype]]:  Promise
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]]:  "Mua xe thành công "

// Promise {<rejected>: 'Mua xe thất bại '}
// [[Prototype]]:  Promise
// [[PromiseState]] :  "rejected"
// [[PromiseResult]] :  "Mua xe thất bại "

//ĐỊNH NGHĨA LỜI HỨA
const doTask1 = (name)=>{
    return new Promise((resolve, reject )=>{
        console.log('bắt đầu công việc');
        console.log(`Thực hiện công việc ${name}`);
        setTimeout(()=>{
            resolve(   `Hoanf thành công việc ${name}`);
        }, 4000);
    })
}
const doTask2 = (name)=>{
    return new Promise((resolve, reject )=>{
        console.log('bắt đầu công việc');
        console.log(`Thực hiện công việc ${name}`);
        setTimeout(()=>{
           // resolve(   `Hoanf thành công việc ${name}`);
           reject(`cong việc ${name} thất bại!`) //TH2: công việc thất bại
        }, 3000);
    })
}
const doTask3= (name)=>{
    return new Promise((resolve, reject )=>{
        console.log('bắt đầu công việc');
        console.log(`Thực hiện công việc ${name}`);
        setTimeout(()=>{
            resolve(   `Hoanf thành công việc ${name}`);
        }, 5000);
    })
}
//tHỰC HIỆN LỜI HỨA

//NHẶT RAU - RỬA RAU - LUỘC RAU
doTask1('nhặt rau') //sau khi thực hiện xong lấy kết quả ra sử dụng Then
    .then(rs =>{
        console.log(rs)
        return  doTask2('rửa rau ') //thực hiện task2
    })
    .then(rs=>{
        console.log(rs)
        return doTask3('luộc rau') //thực hiện task3
    })
    .then(rs=>{
        console.log(rs);
        console.log('kết thúc công việc') //sau khi đã hoàn thành hết all công việc
    })
    .catch(err =>{
        console.log(err)
    })
    
    //THỰC HIỆN CÔNG VIỆC SONG SONG VỚI NHAU SỬ DỤNG PROMISE.ALL();

    //ăn cơm-xem tivi-lướt facebook
    Promise.all([doTask1('ăn cơm'), doTask2('xem tivi'), doTask3('lướt facebook')])
        .then((values)=>{
            console.log(values);
        })
        .catch(err=>{
            console.log(err);
        })