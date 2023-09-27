var inputA = prompt("Nhập số nguyên a:");

var a = parseInt(inputA);

if (isNaN(a)) {
  alert("a không phải là số nguyên hợp lệ.");
} else {
  var inputB = prompt("Nhập số nguyên b:");
  var b = parseInt(inputB);
  if (isNaN(b)) {
    alert("b không phải là số nguyên hợp lệ.");
  } else {
    alert("Tổng của a và b là: " + (a + b));
    alert("Tổng của a và b là: " + (a - b));
    alert("Tổng của a và b là: " + (a * b));
    alert("Tổng của a và b là: " + (a / b));
  }
}



