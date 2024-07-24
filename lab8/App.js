console.log("Welcome to Node.js by Muyinjon Turobov");
console.warn("This is a warning");
console.error("This is an error");
console.trace("This is a trace")

console.log('------example 2: global object,timer------');

setTimeout(() => {
    console.log('This is a timeout');
}, 2000);

let count = 2;

const timer = setInterval(() => {
    console.log(`count: ${count}`);
    if (count === 0) {
        clearInterval(timer);
        console.log("Done");
    }
    count--;
}, 1000)

console.log('------example 3: ------');
console.log(`current directory: ${__dirname}`);
console.log(`current file: ${__filename}`);



console.log('------example 4: working with different modules ------'); 

const name = require('./mod');

console.log(name.helper('muyinjon'));
console.log(name.id(123));
console.log(name.email('muyinjon2@gmail.com'));

console.log('\n------example 5: ------');

const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on(
`test`, function(e) {
console.log(e);} );

eventEmitter.emit(`test`, 'EVENT EMITTED');


console.log('\n------example 6: read file ------');

const fs=require('fs');
fs.readFile('./readmore.txt','utf8',function(error,data){
    console.log(data);
    console.log(`Error = ${error}`);
})

console.log('\n------example 7:write file nodejs ------');
let info = `\nthis file has three names; \nPeter Pan, \nDiana Price, \nBruce Wayne`;
fs.writeFileSync(`./readmore.txt`,info,'utf8',function(error){
    if(error){
        console.log(error);
    }

})

console.log('\n------example 8:append file ------');

fs.appendFile('./user_emails.txt',info,function(error){
    if(error){
        console.log(error);
    }
})

console.log('\n------example 9:remove file ------');

fs.unlink('./user_emails.txt',function(error){
    if(error){
        console.log(error);
    }
})

console.log('\n------example 10: Create file ------');

fs.writeFile('./newfile.txt',info,function(error){
    if(error){
        console.log(error);}
})


console.log('\n------example 11: create directory ------');

fs.mkdirSync('./newfolder1');

console.log('\n------example 12: remove directory ------');

fs.rmdirSync('newfolder');
