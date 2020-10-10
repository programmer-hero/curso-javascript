const valor = "Global";

function myFunction() {
  console.log(valor);
}

myFunction();

function exec() {
  const valor = "Local";
  myFunction();
}

exec();
