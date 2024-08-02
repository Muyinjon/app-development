//explicit type
function greeter(username:string){
    console.log(`Hello ${username}`)
}

let user = "Muyin"

greeter(user)




//implicit array type
let colors:String[]=["red","green","blue"];
console.log(colors)


let numbers:number[]=[1,2,3];
console.log(numbers)

numbers = [1,23,5];
console.log(numbers)

console.log("\n--------example 2: any type--------")

let a:any
a = 5;
console.log('a = 5 : ', typeof (a))
a = "Peter"
console.log('a = "Peter" :', typeof (a))
a = true
console.log('a = true :', typeof (a))


console.log("\n--------example 3: unknown type--------")
let b:unknown
b = 5
console.log('b = 5 : ', typeof (b))
b = "Peter"
console.log('b = "Peter" :', typeof (b))
b = true
console.log('b = true :', typeof (b))

console.log("\n--------example 4: 'enum' type--------")

enum Countries{USA,CANADA,UK}
let usa = Countries.USA
let canada = Countries.CANADA
let uk = Countries.UK
console.log(usa,canada,uk)

console.log(`class object of usa ${usa}`)
console.log(`class object of canada ${canada}`)
console.log(`class object of uk ${uk}`)

console.log("\n--------example 5: 'data' type--------")
let username:string = "Adam Smith"
let characters_username = username.length
console.log(`username: ${username}, characters: ${characters_username}`)

let firstname = "luise"

firstname = firstname as string
let firstname_characters = firstname.length
console.log(`firstname: ${firstname}, characters: ${firstname_characters}`)
console.log("firstname is of type: ",typeof firstname)

console.log("\n--------example 6: return type function--------")
function get_time():number{
    return new Date().getHours()
}
console.log(`current time: ${get_time()}`)

console.log("\n--------example 7: void function--------")

function greet():void{
    console.log("Welcome to angular data types")
}
greet()


console.log("\n--------example 8: fuction with parameters--------")
function get_sum(num1:number,num2:number, name:string):string{
    let result:string = name +", the number is: "+(num1+num2)
    return result
}
console.log(get_sum(5,5,"Muyin"))

console.log("\n--------example 9: optional parameters --------")

function sum_total(num1:number,num2:number,num3?:number):number{
    if(num3){
        return num1+num2+num3
    }else{
        return num1+num2
    }
}
console.log(sum_total(5,5,5))
console.log(sum_total(5,5))

console.log("\n--------example 10: spread syntax --------")

function get_averge(...numbers:number[]):number{
    let total = 0
     let average = 0
     let count = 0
     for(let i=0;i<numbers.length;i++){
        total = total + numbers[i]
        count ++
    }
     return average = total/count
    }
console.log(get_averge(5,10,12,15,6))

console.log("\n--------example 11: class --------")

class Car{
    brand:string
    model:string
    yearmanufactured:number

    constructor(brand:string,model:string,yearmanufactured:number){
        this.brand = brand
        this.model = model
        this.yearmanufactured = yearmanufactured
    }

    year(){
        console.log(`this is the year of the car: ${this.yearmanufactured}`)
    }



}

let usercar = new Car("BMW","X5",2019)

console.log(`the car brand is: ${usercar.brand}`)
console.log(`the car model is: ${usercar.model}`)
console.log(`the car year is: ${usercar.yearmanufactured}`)
usercar.year()


console.log("\n--------example 12:  --------")

class Person{
    save(){
        console.log("save")
    }
}
class Customer extends Person{
    sale(){
        console.log("x sale")
    }
}
class Employee extends Customer{
    salary(){
        console.log("salary paid ")
    }
}

let Person1 = new Person()
Person1.save()
let Customer1 = new Customer()
Customer1.save()
Customer1.sale()
let Employee1 = new Employee()
Employee1.save()
Employee1.sale()
Employee1.salary()