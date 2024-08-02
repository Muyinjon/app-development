var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//explicit type
function greeter(username) {
    console.log("Hello ".concat(username));
}
var user = "Muyin";
greeter(user);
//implicit array type
var colors = ["red", "green", "blue"];
console.log(colors);
var numbers = [1, 2, 3];
console.log(numbers);
numbers = [1, 23, 5];
console.log(numbers);
console.log("\n--------example 2: any type--------");
var a;
a = 5;
console.log('a = 5 : ', typeof (a));
a = "Peter";
console.log('a = "Peter" :', typeof (a));
a = true;
console.log('a = true :', typeof (a));
console.log("\n--------example 3: unknown type--------");
var b;
b = 5;
console.log('b = 5 : ', typeof (b));
b = "Peter";
console.log('b = "Peter" :', typeof (b));
b = true;
console.log('b = true :', typeof (b));
console.log("\n--------example 4: 'enum' type--------");
var Countries;
(function (Countries) {
    Countries[Countries["USA"] = 0] = "USA";
    Countries[Countries["CANADA"] = 1] = "CANADA";
    Countries[Countries["UK"] = 2] = "UK";
})(Countries || (Countries = {}));
var usa = Countries.USA;
var canada = Countries.CANADA;
var uk = Countries.UK;
console.log(usa, canada, uk);
console.log("class object of usa ".concat(usa));
console.log("class object of canada ".concat(canada));
console.log("class object of uk ".concat(uk));
console.log("\n--------example 5: 'data' type--------");
var username = "Adam Smith";
var characters_username = username.length;
console.log("username: ".concat(username, ", characters: ").concat(characters_username));
var firstname = "luise";
firstname = firstname;
var firstname_characters = firstname.length;
console.log("firstname: ".concat(firstname, ", characters: ").concat(firstname_characters));
console.log("firstname is of type: ", typeof firstname);
console.log("\n--------example 6: return type function--------");
function get_time() {
    return new Date().getHours();
}
console.log("current time: ".concat(get_time()));
console.log("\n--------example 7: void function--------");
function greet() {
    console.log("Welcome to angular data types");
}
greet();
console.log("\n--------example 8: fuction with parameters--------");
function get_sum(num1, num2, name) {
    var result = name + ", the number is: " + (num1 + num2);
    return result;
}
console.log(get_sum(5, 5, "Muyin"));
console.log("\n--------example 9: optional parameters --------");
function sum_total(num1, num2, num3) {
    if (num3) {
        return num1 + num2 + num3;
    }
    else {
        return num1 + num2;
    }
}
console.log(sum_total(5, 5, 5));
console.log(sum_total(5, 5));
console.log("\n--------example 10: spread syntax --------");
function get_averge() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    var average = 0;
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
        count++;
    }
    return average = total / count;
}
console.log(get_averge(5, 10, 12, 15, 6));
console.log("\n--------example 11: class --------");
var Car = /** @class */ (function () {
    function Car(brand, model, yearmanufactured) {
        this.brand = brand;
        this.model = model;
        this.yearmanufactured = yearmanufactured;
    }
    Car.prototype.year = function () {
        console.log("this is the year of the car: ".concat(this.yearmanufactured));
    };
    return Car;
}());
var usercar = new Car("BMW", "X5", 2019);
console.log("the car brand is: ".concat(usercar.brand));
console.log("the car model is: ".concat(usercar.model));
console.log("the car year is: ".concat(usercar.yearmanufactured));
usercar.year();
console.log("\n--------example 12:  --------");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log("save");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log("x sale");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log("salary paid ");
    };
    return Employee;
}(Customer));
var Person1 = new Person();
Person1.save();
var Customer1 = new Customer();
Customer1.save();
Customer1.sale();
var Employee1 = new Employee();
Employee1.save();
Employee1.sale();
Employee1.salary();
