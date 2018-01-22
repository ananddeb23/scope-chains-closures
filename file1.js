function foo(){
  let bar = false;
  quux = 2;
  function zip(){
    let quux = 4;
    bar = true;
    console.log(bar, quux);
  }
  return zip;
}

const result = foo();
// asdfasdf

// asdfasdf
// console.log(result.toString());
console.log(result());
