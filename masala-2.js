let login = ' 21asdasdasd ';
let password = '122sdasdsad  ';

login = login.trim()
password = password.trim()

let obj = {};

if (login.length >= 8 && password.length >= 8) {
  obj.login = login;
  obj.password = password;
  console.log("Siz muvaffqiyatli ro'yxardan o'tdingiz\n",obj);
} else if (login.length <= 7 && password.length <= 7) {
  console.log(`Login kamida 8 ta belgidan iborat bo'lishi kerak \n Parol kamida 8 ta belgidan iborat bo'lishi kerak`);
} else if (password.length <=7) {
  console.log("Parol kamida 8 ta belgidan iborat bo'lishi kerak");
}




