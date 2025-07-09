function greet(name) {
    console.log("update this function");
    return `Hello ${name}!`;
}

module.exports = greet;

if(require.main === module) {
    console.log(greet("World"));
}