// a();
let i = 50;

function a() {
  let a = 1;

  function b() {
    let a = 5;

    for (let i = 0; i < 20; i++) {
      console.log(i);
    }

    console.log(a);

    function e() {
      console.log(a);
    }

    e();
  }

  let g = 500;
  console.log(a);
  b();
  c();

  g = 400;

  function c() {
    console.log(g);
  }

  c();

  //   function d() {}
}