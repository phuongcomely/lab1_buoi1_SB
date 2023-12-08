

//thực hiện lập trình bất đồng bộ thực hiện hành động sau khi thực hiện xong công việc trước 
//(CÁC CÔNG VIỆC LIÊN QUAN VỚI NHAU)
// Mô tả về hoạt đồng hằng ngày
// 1. Làm bài tập (3s)
// 2. Đá bóng (4s)
// 3. Nấu cơm (5s)

function doTask1(name, callback) { //tên công việc, 1 function thể hiện làm coongg việc gì sau khi hàm này thực hiện xong
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 3000);
}

function doTask2(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 4000);
}

function doTask3(name, callback) {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function () {
        callback();
    }, 5000);
}

function finish() {
    console.log("Kết thúc công việc");
}

//NHẶT RAU - RỬA RAU - LUỘC RAU

doTask1('nhặt rau', ()=>{
    doTask2('rửa rau', ()=>{
        doTask3('luộc rau', finish);
    });
});
 

// Thực hiện công việc nối chuỗi nhau
doTask1("Làm bài tập", function () {
    doTask2("Đá bóng", function () {
        doTask3("Nấu cơm", finish);
    });
});

// Thực hiện đồng thời các công việc
doTask1("ăn cơm", function () {
    console.log("Ăn cơm  xong");
})

doTask2("Xem ti vi", function () {
    console.log("xem ti vi xong");
})

doTask3("lướt facebook", function () {
    console.log("lướt facebookxong");
})
