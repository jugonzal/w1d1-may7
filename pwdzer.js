// this is my JS file

// read a password from console
var password = process.argv[2]

// analyze
var goodLength = password.length > 6 ? true : false;

// output a report
console.log("Password to be analyzed: ",password)
console.log("Analysis of good length: ",goodLength)
