// let fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "pear",
//   "grape",
//   "pineapple",
//   "strawberry",
//   "watermelon",
//   "kiwi",
//   "mango",
//   "peach",
//   "lemon",
//   "lime",
//   "blueberry",
//   "raspberry",
//   "blackberry",
//   "apricot",
//   "cherry",
//   "coconut",
//   "fig",
//   "pomegranate",
//   "plum",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
//   "longan",
//   "dragonfruit",
//   "clementine",
//   "satsuma",
//   "mandarin",
//   "tangelo",
//   "yuzu",
//   "nectarine",
//   "persimmon",
//   "tangerine",
//   "papaya",
//   "guava",
//   "jackfruit",
//   "lychee",
//   "starfruit",
//   "cantaloupe",
//   "honeydew",
//   "mangosteen",
//   "pawpaw",
//   "durian",
//   "tamarind",
//   "mulberry",
//   "currant",
//   "gooseberry",
//   "rambutan",
// ];

// let counter = fruits.length;
// let counterloop = 0;
// let flag = true;

// while (flag) {
//   counterloop++;

//   if (counterloop ==10) {
//     continue;
//   } else if (counterloop ==20) {
//     break;
//   }
//   console.log(counterloop);
// }

// for(let i = 0; i < counter;  i++) {
//   console.log(fruits[i]);
// }


// let counter = 0;
// fruits.forEach(function (item){
//   if(item[0] == "a"){
//     console.log(item);
//     counter++;
//   }


//   // console.log(item[0]);
// });



// let counter = 0;
// fruits.forEach(function (item) {
//   if (item[0] == "a") {
//     console.log(item);
//     counter++;
//   }
// });

// while (fruits.length > 0) {
//   let item = fruits.pop();
//   if (item[0] == "a") {
//     console.log(item);
//     counter++;
//   }
// }

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i][0] == "a") {
//     console.log(fruits[i]);
//     counter++;
//   }
// }

// console.log(counter);


let familyList = [
  {
    name: "John Doe",
    age: 25,
  },
  {
    name: "Jane Doe",
    age: 17,
  },
  {
    name: "Jack Doe",
    age: 18,
  },
  {
    name: "Janifer Doe",
    age: 14,
  },
  {
    name: "Sem Doe",
    age: 24,
  },
];

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

familyList.forEach((member)=>{
  
  if (checkAge(member.age) ) {
    console.log('adult', member.age);
  } else {
    console.log('child', member.age);
  }
})


console.log(checkAge);













// // console.log(familyList[0].name + " " + familyList[0].age);
// familyList.forEach((item)=>{
//   if(item.age >= 21){
//     console.log('You adult!')
//   }
// })


// const usersData = [
//   {
//       name: 'John',
//       age: 25,
//       surname: 'Doe',
//       fatherName: 'Smith'
//   },
//   {
//       name: 'Jane',
//       age: 30,
//       surname: 'Doe',
//       fatherName: 'Sarah'
//   },
//   {
//       name: 'Jack',
//       age: 28,
//       surname: 'Doe',
//       fatherName: 'John'
//   },
//   {
//       name: 'Jill',
//       age: 32,
//       surname: 'Doe',
//       fatherName: 'Monica'
//   }
// ]

// let counter = 0;


// function getInitialsUser(surname, name, fatherName){
//   counter++;
//   if(counter <=3){
//     return surname + " " + name[0] + "." + fatherName[0] + ".";
//   }else{
//     return "Function is called more than 3 times"
//   }
  // const Initials = surName + ' ' + name[0] + "." + fatherName[0] + ".";
  // return Initials;
// }

// function displeyAlertIpnutText(text){
//   alert(text);
// }

// const sayHello = (someText) => {
//   console.log(someText);
// };












// const inputText = prompt("Enter text to displey in alert");
// displeyAlertIpnutText(inputText);


// usersData.forEach((user)=>{
//   const userInitials = getInitialsUser(
//     user.surname,
//     user.name, 
//     user.fatherName
//     );
//   console.log(userInitials + " " + user.age)
// })


// const userInitials = getInitialsUser("Doe", "John", "Smith");
// console.log(userInitials);





 







// const position = fruits.indexOf("cantaloupe");
// console.log(position);
// if(position >= 0){
//   console.log(`I like a ${fruits[position]}`)
// }else{
//   console.log('Error')
// }

// let someVar = "aPPle";
// let someThing = someVar.toLowerCase();

// let target = fruits[8];
// const firstLetter = target[0].toUpperCase();
// let newWord = firstLetter + target.slice(1, target.length);
// console.log(newWord);





// const fruitsName = fruits.indexOf(position)
// console.log(fruitsName)
  






// const secNum = 7;
// const sicret = prompt("Вгадай число")

// if (sicret == secNum ){
//   console.log("Ви вгадали")
// } else if (sicret < secNum){
//   console.log("Введіть більше число")
// } else {
//   console.log("Введіть менше число")
// }

// if (sicret == secNum){
//   console.log("WAW")
//   if(sicret > 7){
   
//   }else{
//     console.log("ВВедіть менше число")
//   }
//   if(sicret < 7){
    
//   }else{
//     console.log("ВВедіть більше число")
//   }
// }
 


// let personalData = {
//   name: "John",
//   surName: "Patric",
//   lastName: "Doe",
//   addsres: {
//     city: "Dro",
//     street: "Rany",
//     number: 123,
//     name: "some",
//     metrics:{
//       water: 4262,
//       gas: 738
//     }
//   },
//   age: [12, 23, 45],
//   isChildren: true
// };

// const a = prompt("Ввудіть число: ")

// if (a == 0 || a > 5){
//   console.log("Success")
// }else{
//   console.log("Fail")
// }

// const age = prompt("Ввеіть ваш вік: ");
// const isActive = false;
// console.log(typeof age);

// let someArr = null;


// if(!someArr) {
  
// }else{
//   console.log("форма не працює")
// }

// if (age >=0){
//   if (age < 18){
//     console.log("Ви не повнолітні")
//   }else if(age>=18 && age <21){
//     console.log("Повнолітні в україні")
//   }else{
//     console.log("Повнолітні всюди")
//   }
//  //some logic 
// }else{
//  console.log("Ви ввели невірне значення");
// }

// personalData.size = size

// console.log(personalData)

// let metrics = personalData.addsres.metrics

// console.log(metrics)
// console.log(personalData.age[1])









// let name = "John";
// let surname = "Doe";
// let middleName = "Patric";

// let arraySome = ['test', 13, true, 13, 12.56];
// const position = arraySome.indexOf(8);


// if(position>=0){
// console.log(`Число ${13} є в масиві!`);
// }else{
//   console.log(`Число ${13} не є в масиві!`)
// }




// Array

// let age = [12, 13, 22, 17];

// const personalData = surname + ' ' + name[0] + '.' + ' ' + middleName[0] + '.'

// console.log("Data: ", personalData)



// console.log("Data: ", name);




