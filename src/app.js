function greet(name) {
    console.log("update this function");
    return `Hello ${name}!`;
}

module.export = greet;

if(require.main === module) {
    console.log(greet("World"));
}