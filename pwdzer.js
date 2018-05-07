// this is my JS file

// read a password from console
var password = process.argv[2]

// analyze
var goodLength = password.length > 6 ? true : false;

var allNumber = "0123456789"
var hasNumbers = false;
for (i=0; i< password.length; i++) {
  if (allNumber.includes(password[i])) {
    hasNumbers = true;
  }
}

var allCaps = "QWERTYUIPAASDFGHJKLZXCVBNM"
var hasCaps = false;
for (i=0; i< password.length; i++) {
  if (allCaps.includes(password[i])) {
    hasCaps = true;
  }
}

// output a report
console.log("Password to be analyzed: ",password)
console.log("Analysis of good length: ",goodLength)
console.log("Includes numbers: ", hasNumbers)
console.log("Includes CaPS:", hasCaps)