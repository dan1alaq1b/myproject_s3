let message = "benr"
console.log(message, typeof message)






let str = "1.258"
let num = "1"

let total = parseFloat(str)+num
console.log(total, typeof total)

let data = ["benr", 3523, true]

console.log(data[0])
console.log(data[1])
console.log(data[2])
console.log(data[3])

let user = {
    name: "danial",
    age: 21,
    faculty: "FKEKK"
}
console.log(user.name)
console.log(user.age)
console.log(user.faculty)

let messages = [
    {
        name: "usr1",
        date: "1/4/2023",
        msg: "very good video",
        like: 1000    
    },
    {
        name: "usr2",
        date: "2/4/2023",
        msg: "very good video",
        like: 3000    
    }//,
]
console.log(messages[1].msg) // >> very good video