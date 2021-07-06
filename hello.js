const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello ('John');
sayHello ("Miranda");
sayHello ("Tiffany");

const returnSayHello = function (name) {
  return "hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);