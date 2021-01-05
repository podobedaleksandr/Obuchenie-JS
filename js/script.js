// let x = 10;
// let y = 20;
// let res;

// res = x + y;
// console.log("результат " + res);

// res = x * y;
// console.log("результат " + res);

// res = x - y;
// console.log("результат " + res);

// res = x % y;
// console.log("результат " + res);

// res = y - (x + y);
// console.log("результат " + res);

// let str = 'Privet ';
// let str2 = 'Mir';

// console.log("результат: " + (str + str2));

// let x = 20;
// let y = 20;
// if (x != y){
//     console.log('proverka')
//     console.log('ne ravny')
// } else if( x > y)
//     console.log('число x больше чем число y')
//  else(x == y)
//     console.log('ravny')



// let num = 'igor';
// switch(num){
//     case 'alex':
//         console.log('имя alex');
//         break;
//     case "marina":
//         console.log('имя marina');
//         break;
//     default:
//         console.log('хуй пойми как зовут');
//         break;       
// }


// // полная запись
// let kus = 23;
// let res = '';
// if(kus > 25)
//     res = "big";
// else
//     res = 'small';
// console.log (res); 

// // сокращенная запись
// let result = kus > 25 ? "big" : "small";
// console.log(result);

// МАССИВЫ

// let array = [24, true, 33.33, "slovo", 5, 6];
// array[2] = 'dva';
// array[3] += ' tri';

// console.log(array.length); подсчитывает элементы
// array.pop(); // удаляет последний элемент
// array.push('ghgh', 54, 44); // добавляет в конец элементы
// array.shift(); // удаляет первый элемент
// array.unshift(); // добавляет элемент в начало массива
// array.length = 2; //обрезать массив
// delete array[3]; // удаляет конкретную
// array.splice(1, 1); // удаляет конкретное кол-во элементов с конкретного мтарта


// //let arr = new Array(5); //создаст 5 пустых элементов


// console.log(array);
// // двумерные массивы
// let matr = [[24, true, 33.33, "slovo", 5, 6], 
//             [4], 
//             ['slovechko']
// ];
// console.log(matr[0][2]);

// объединение в массив сплит
// let str = "hghg, ff, ggkgjkn, ddd, ssss,"
// let array_split = str.split(", ");
// console.log(array_split); 

// // разбитие из массива в сторку
// let str = ["hghg, ff, ggkgjkn, ddd, ssss,"]
// let array_join = str.join(", ");
// console.log(array_join); 

// ЦИКЛЫ

// for(var i = 100; i >= 10; i -= 10){
//     console.log(i);
// }

// let i = 0;
// while(i < 10){
//     i++;
//     console.log(i);
// }

// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while(i<10);

// // // function show (){
// // //     let el = 'Element';
// // //     console.log(el);
    
// // // }
// // // show();

// function calc(a, b){
//     var res = a+b;
//     console.log(res);
// }
// calc (55, 5);

// function mult (a,b,c){
//     var res = a*b*c;
//     return res;
// }
// mult();

// // функции с таймером
// function test(words){
//     console.log(words);
// }
// setTimeout(test, 1500, 'Privet');
// setTimeout("console.log('Privvvvet')", 1500);


// // объекты
// let car = {
//     name: "Lada",
//     bak: "70l",
//     color: "black",
//     passengers: ['alex', 'bob', 'Loohhh'],
// };
// console.log(car["color"]);

// for(let key in car){
//     console.log("элемент к ключу " + key + ": " + car[key]);
// }


// //классы
// // function Car(name, bak, color, passengers){
// //     this.name = name;
// //     this.color = color;
// //     this.bak = bak;
// //     this.passengers = passengers;
// // }


// class Car{
//     constructor(name, bak, color, passengers){
//         this.name = name;
//         this.color = color;
//         this.bak = bak;
//         this.passengers = passengers;
//     }
//     info(){
//         console.log("марка: " + this.name + ", цвет: " + this.color)
//     }
// }
// let bmw = new Car("m3", "blue", "70l", "4")
// console.log(bmw);
// console.log(bmw.color);

// bmw.info();

// // json объекты
// let obj = '{"name": "alex", "age": 45, "hasCar": true, "friends": [4,5,6,7,8]}';
// obj = JSON.parse(obj);

// let arr = '[5,6,7,8,9]';
// arr = JSON.parse(arr);

// console.log(obj);

// var object = '{"name":"alex","age":55,"gender":"male"}';

// let str = JSON.stringify(object);
// console.log(str);

// window.innerHeight
// window.innerWidth
// window.open("about:blank", "hello", "width=200, height=200");


// console.log(navigator.platform);


// console.log(location.href);
// location.href = "https//ya.ru";

// console.log(document);

// document.body.firstChild
// document.body.lastChild
// document.body.childNodes
// for(var i = 0; i < document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i])
// }


// let content = document.getElementById("content");
// console.log(content);

// let content1 = content.getElementBy("content");
// console.log(content1);

// let content = document.getElementById("content");
// console.log(content);