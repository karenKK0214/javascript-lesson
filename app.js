// Q1
let nickname = 'ひさか';
console.log(nickname);
let age = '27';
console.log(age);
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');
// Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go']
console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。');
// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log('user.age:', user.age)
// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);
// Q5
let totalAge = 0;
for (i = 0; i < playerList.length; i++) {
  totalAge = totalAge + playerList[i].age
 console.log(playerList[i].age);
}
console.log(totalAge)

console.log(totalAge / playerList.length);

// Q6
function sayHello() {
  console.log('Hallo');
}
sayHello();

const sayWorld = function() {
 console.log('World');
}
sayWorld();
// Q7
user.birthday = '2000-09-27';
console.log('userのなかみ:', user)
user.sayHello = function() {
 console.log('Hello！');
}
user.sayHello();
// Q8
// 和
let calc = {}
calc.add = function(x, y) { 
  let plus = x + y;
  console.log(plus);
}
calc.add(3, 4); 
calc.subtract = function(x, y) {
    let minus = x - y;
    console.log(minus);
  }
calc.subtract(12, 2);
// 積
calc.multiply = function(x, y) {
    let multiplication = x * y;
    console.log(multiplication);
  }
calc.multiply(7, 7);
// 商
calc.divide = function(x, y) {
    let division = x / y;
    console.log(division);
  }
calc.divide(10, 2);
// Q9
function remainder(x, y) {
  return  x % y
}
let num1 = 5
let num2 = 3
console.log('5を3で割った余りは' + remainder(num1, num2) + 'です。')

// Q10
// function foo() {
//   let x = 1;
// }
// console.log(x);
// 関数の中で定義した変数は関数の中でしか使えない(関数内だけスコープが有効)。今回は関数の外なので表示されない。また関数の外で定義した変数は関数の中からでも参照することができる。


// 応用編Q1
// let random = Math.random(); // 0〜0.99999....
// Math.floor(0.98798) // 0より下を切り捨てることができる
// console.log('randomかける１０ => ', random数);
let random = Math.floor(Math.random() * 10); 
console.log(Math.random() * 10)
console.log('random => ', random);

// 応用編Q2
var alertmsg = function(){
  console.log("Hello World!");
}
setTimeout(alertmsg, 3000);
// 応用編Q3
let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}

// 応用編Q4
let numbers = [];

for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers)

// 応用編Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (i = 0; i < mixed.length; i++) {
  if (typeof(mixed[i]) === 'number'){ 
    if (mixed[i] % 2 === 0){ 
      console.log('even')
    }else { 
      console.log('odd')
    }
  } else { 
    console.log('not number')
  }
} 

