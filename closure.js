// here function y forms a closure with scope of x
// and function y also forms a closure with scope of z.

// interesting..

function z() {
  var j = 200;
  function x() {
    var i = 100;
    function y() {
      console.log(i, j);
    }
    y();
  }
  x();
}

z();
