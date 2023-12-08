
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
            //resolve(   `Hoanf thành công việc ${name}`);
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

const doTask = async ()=>{ //định nghĩa function
   try {
    let result = await doTask1('nhặt rau');
   console.log(result);
   
   let result2 = await doTask2('rửa rau');
   console.log(result2);

   let result3 = await doTask3('luộc rau');
   console.log(result3);
   console.log('Kết thúc công việc');
   } catch (error) {
    console.log(error);
   }
}
doTask(); //gọi lại function để thực hiện