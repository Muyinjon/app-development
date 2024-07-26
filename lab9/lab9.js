let student1 = {
    name: "Muyin",
    age: 24,
    school: "CUNY Brooklyn College",
}


console.log(student1["name"])

console.log(student1.school)

student1.age = 30
student1["school"]= "NYU"
console.log(`Updated Age: ${student1.age}, Updated School: ${student1.school}`)

//Example 2

let user1 = {
    name: "Martha",
    age:80,
    friends:["Muyin","Carl","Jimmy"],
    favorite:{
        food:"Pizza",
        color:"red",
    } }

let favorite_food = user1.favorite.food
console.log(`${user1.name} favorite food is ${favorite_food}`)

let secound_favorite_friend = user1.friends[1]
console.log(`${user1.name} secound favorite friend is ${secound_favorite_friend}`)

//Example 3: Array list as object

let schedule = [
    {
        day: "Monday",
        plan: "go to gym",
        time: "9:00PM"

    },
    {
        day: "Tuesday",
        plan: "Complete Lab 9",
        time: "5:30PM"}
]
console.log(`\nThe plan for ${schedule[1].day} at ${schedule[1].time} is ${schedule[1].plan}`)

console.log(`\n -------Example 4-----`)

let item = {
    id:1234,
    name: "pencil",
    quantity: 50,
    color: ["blue","red","green"],
    sale: function(){
        return "SALE!!! 50% OFF"
    },
    quantity_cart: function(e){
        return this.quantity -= e

}}

console.log(`The sale message of ${item.name} is  ${item.sale()}`)

console.log(`The remaining quantity of ${item.name} is ${item.quantity_cart(4)}`)


//Example 5: JSON
// convert object to JSON

let fashionshow = [
{
    name:"alice",
    age:21,
    city:"NY"
},
{
    name:"bob",
    age:22,
    city:"LA"
}
]


//print object 'fashionshow'
console.log(`\n-------Example 5-----`)
console.log(fashionshow)

//create JSON version of 'fashionshow' JavaScript object
let fashionshow_json = JSON.stringify(fashionshow)
console.log(`\n-------Example 6-----`)
console.log(fashionshow_json)