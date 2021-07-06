function a() {
  console.log(x);
}

var x = 10;
a();

// when execution reaches console.log, JS will try to find out x in the local memmory.
// i.e x in a's execution context.

// Scope: where we can access a specific variable or function in code.
