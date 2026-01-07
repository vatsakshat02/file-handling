const fs = require('fs');

fs.writeFileSync("./sample.txt","hello world"); //this is for synchronus file

// fs.writeFile('./sample.txt','crazy world', (err) => {});//this is for asynchronus function to capture error
//how to read a file

// const res = fs.readFileSync('./contact.txt','utf-8'); //second parameter is the encoding in which we want our data
// console.log(res);

// //now the important difference is that in synchronus it basically gives us the data by return the value
// //in asynchronus it basically needs a callback function to return the value

// fs.readFile('./contact.txt','utf-8',(err,result) => {
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result); //basically using callback function to get the value
//     }
// })

fs.appendFileSync('./sample.txt', 'hey there\n');