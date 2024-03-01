let a = 10;
let b = 15;
let c = 30;
console.log("Average of a and b is", (a + b)/2);
console.log("Average of c and b is", (c + b)/2);
console.log("Average of a and c is", (a + c)/2);
console.log("Average of b and a is", (b + a)/2);
console.log("Average of b and c is", (b + c)/2);
console.log("Average of c and a is", (c + a)/2);

const hello = () => {
    console.log("Hello World");
    return "Hi";
  };
  function oneplusavg(x, y) {
    return 1 + (x + y) / 2;
  }
  
  const sum = (p, q) => {
    return p + q;
  };
  let d = 1;
  let e = 2;
  let f = 3;
  let v = hello();
  console.log("one plus average of a and b is", oneplusavg(d, b));
  console.log("pne plus average of b and c is", oneplusavg(e, c));
  console.log("one plus average of a and c is", oneplusavg(f, c));
  console.log(sum(9, 7));
  