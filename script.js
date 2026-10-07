// const users = [
//     { name: "John", status: "active" },
//     { name: "Mike", status: "inactive" },
//     { name: "Sarah", status: "active" },
//     { name: "David", status: "suspended" }
// ];

// function checkUser(user) {
//     return user.status === "active";
// }


// const activeUsers = users.filter(checkUser);

// console.log(activeUsers);



const shippingAddresses = [
    "Tbilisi",
    "",
    "Batumi",
    ""
];

shippingAddresses.fill("TBD", 1, 2)
shippingAddresses.fill("TBD", 3, 4)

console.log(shippingAddresses)




const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "T-Shirt", category: "Clothing", price: 50 },
    { name: "Phone", category: "Electronics", price: 800 },
    { name: "Shoes", category: "Clothing", price: 100 }
];

products.forEach(function(product){
    if (product.category === "Electronics"){
        product.price = product.price - product.price * 0.1
    }
})

console.log(products);



const users = [
    { name: "John", email: "john@gmail.com" },
    { name: "Mike", email: "mikegmail.com" },
    { name: "Sarah", email: "sarah@yahoo.com" },
    { name: "David", email: "davidoutlook.com" }
];

const validUsers = users.filter(function(eachUser){
    return eachUser.email.includes("@")
}
)
console.log(validUsers)



const calendar = [
    "Gym",
    "",
    "University",
    "",
    "Movie",
    ""
];

calendar.fill("No Event Scheduled",1,2)
calendar.fill("No Event Scheduled",3,4)
calendar.fill("No Event Scheduled",5)

console.log(calendar)



const orders = [
    { id: 1, totalPrice: 100 },
    { id: 2, totalPrice: 250 },
    { id: 3, totalPrice: 75 },
    { id: 4, totalPrice: 300 }
];

let total = 0
orders.forEach(function(order){
    total += order.totalPrice
})

console.log(total)



const coupons = [
    { code: "SAVE10", expirationDate: "2026-10-10" },
    { code: "SAVE20", expirationDate: "2026-09-01" },
    { code: "SAVE30", expirationDate: "2026-12-25" },
    { code: "SAVE40", expirationDate: "2026-08-15" }
];

const currentDate = new Date("2026-10-07");

const activeCoupons = coupons.filter(function(coupon){
    return new Date(coupon.expirationDate) >= currentDate
})

console.log(activeCoupons)
