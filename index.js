function add(a, b) {
  let sum = '';
  let addOn = 0;
  let temp = '';
  if (a.length < b.length) {
    a = '0'.repeat(b.length - a.length) + a;
  }
  else if (b.length < a.length) {
    b = '0'.repeat(a.length - b.length) + b;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    sum += parseInt(a[i]) + parseInt(b[i]);

    if (parseInt(a[i]) + parseInt(b[i]) >= 10) {
      let temp = parseInt(a[i]) + parseInt(b[i]);
      temp = temp.toString();

      addOn = temp[0];

      addOn = parseInt(addOn);

    }
  }
  return sum.split("").reverse().join("");
}

add('27', '45');
