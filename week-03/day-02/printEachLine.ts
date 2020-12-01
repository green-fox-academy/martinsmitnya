const fs = require('fs');
// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"
try {
    let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
}
catch (e) {
    console.log(e);
    console.log("M-m-Morty I'm unable to read <burp> file: my-file.txt");
}
