/*

mô hình client - server
Client ->> request -> Server: Xử lý -> Response -> Client

request : CURD( Create(tạo), Update, read, delete) các hành động thực hiện trên tài nguyên hệ thống
response: Json (js object notation, xml, html,..)

API(Application Programing Interface): giao diện lập trình ứng dụng 
VÍ DỤ:
 khách hàng: client
 nhân viên: thêm món, hủy món, thanh toán,...(API)
 nhà bếp: Server
tài nguyên hệ thống ở ví dụ này là: món ăn: 
hành động tương tác với tài nguyên: lấy, hủy, thanh toán, cập nhật,...

//PHƯƠNG THỨC: get-read, Post-create, Put-update, Delete-delete,..

REsponse: thành công- thất bại (http status code)

API:
GET/api/version 1/post:lấy tài nguyên để thao tác
GET/api/version 1/post/1: lấy tài nguyên có id là 1
GET/api/version 1/post?limit=10&page=1: lấy danh sách mỗi tragng, mỗi trang 10 bài viết, đang ở trang1

DELETE/api/version 1/post/1: xóa bài viết có id là 1
POST/api/version 1/posts: tạo bài viết
    request body-(title: 'abc', content:'xys');
PUT/api/version 1/posts/1: cập nhật bài viết có id =1
       request body-(title: 'xya', content:'xys');

gọi API trong js
-fetch api: build-in method của js có sẵn
-axtos: sử dụng method bên ngoài 

*/

const btn = document.getElementById("btn");
const image = document.getElementById("image");

//fetch API: Bấm nút -> gọi API-> lấy dữ liệu từ API -> hiển thị lên giao diện
// btn.addEventListener('click', function(){
//     fetch('https://dog.ceo/api/breeds/image/random')
//         .then(rs=>{
//             console.log(rs);
//             return rs.json(); //convert giá trị sang json . được xem là 1 công việc nên sẽ có then trả về kqua

//         })
//         .then(rs=>{
//             console.log(rs);
//             image.src = rs.message; //thay đổi đường link ảnh 

//         })
//         .catch(err=>{
//             console.log(err);
//         })
// })

//CÁCH 2: async/await
// btn.addEventListener('click', async () => {
//     try {
//         const rs = await fetch("https://dog.ceo/api/breeds/image/random");
//         const data = await rs.json();
//         image.src = data.message;


//     } catch (error) {
//         console.log(error);
        
//     }
// });

//  CÁCH 3: AXIOS
btn.addEventListener('click',async ()=>{
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function(response){
            console.log(response);
            image.src = response.data.message;
        })
        .catch(function(err){
            console.log(err)
        })
})
//CÁCH 4: axios + async/await
btn.addEventListener('click', async()=>{
    try {
        const rs = await axios.get('https://dog.ceo/api/breeds/image/random');
        image.src = rs.data.message;
    } catch (error) {
        console.log(error);
    }
})


// Lắng nghe sự kiện khi bấm vào nút "random"
// btn.addEventListener("click", function () {
//     getRandomImage()
// })

// // Gọi API để lấy dữ liệu và hiển thị
// async function getRandomImage() {
//     try {
//         // Gọi API lấy ảnh random của dog
//         let res = await axios.get("https://dog.ceo/api/breeds/image/random")

//         // Gán URL cho thẻ image
//         image.src = res.data.message
//     } catch (error) {
//         console.log(error);
//     }
// }