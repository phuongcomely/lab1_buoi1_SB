let products = [    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
console.log("1. Thông tin sản phẩm trong giỏ hàng:");
products.forEach(product => {
    console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
});

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let totalAmount = products.reduce((total, product) => total + product.price * product.count, 0);
console.log("\n 2. Tổng tiền tất cả sản phẩm trong giỏ hàng:", totalAmount);

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
let findBrand = products.filter( product=>product.brand==="Apple");
console.log("\n 3. Sản phẩm của thương hiệu Apple:", findBrand);

// 4. Tìm các sản phẩm có giá > 20000000
let expensivePrice = products.filter(product => product.price >20000000);
console.log("\n 4. Các sản phẩm có giá lớn hơn 20000000:, ", expensivePrice);

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let proProduct = products.filter(product => product.name.toLowerCase().includes("pro"));
console.log("\n5. Sản phẩm có chữ 'pro' trong tên:", proProduct);   

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = {
    name: "IP 15 proMax",
    price: 35000000,
    brand: "APPLE",
    count: 2,
};
products.push(newProduct);
console.log("\n 6. Danh sách sản phẩm sau khi thêm: ", products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products = products.filter(product => product.brand !== "Samsung");
console.log("\n 7. Danh sách sản phẩm sau khi xóa samsung: ", products);

// 8. Sắp xếp giỏ hàng theo price tăng dần

products.sort((a, b)=> a.price -b.price);
console.log("\n 8. Sản phẩm sau khi sắp xếp tăng dần theo giá là: ", products)

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b)=> b.price -a.price);
console.log("\n 8. Sản phẩm sau khi sắp xếp giảm dần theo số lượng là: ", products)

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let twoProducts = products.slice(0, 2);
console.log("\n10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng:", twoProducts);