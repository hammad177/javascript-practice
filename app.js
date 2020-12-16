// let personData = {
//     name: 'Hammad Shaukat',
//     address: '1041 Block 15',
//     city: 'Karachi'
// }

// let name = personData.name;
// let address = personData.address;
// let city = personData.city;

// let { name, address, city} = personData

// console.log(name, address, city);

// let array1 = [1,2,3];
// let array2 = [4,5,6];

// let combine = array1.concat(array2);

// let combine = ['1st', ...array1, '2nd', ...array2];

// console.log(combine);

//  let addition = (num,num1) => num + num1;
//  console.log(addition(18 + 10));
// let jobs = [
//     {name: 'saad', Active: true},
//     {name: 'yasmeen', Active: true},
//     {name: 'hani', Active: false},
// ];

// let isActive = jobs.filter(jobs => jobs.Active);

// console.log(isActive);

// let promise = new Promise(function(resolve,reject){
//     firebase.database().ref('users').on('child_added', function(data){
//         if(data.val()){
//             resolve(data.val());
//         }
//         else{
//             reject('something went wrong');
//         }
//     })
// })

// promise.then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })

// var num = Number.isInteger(9.4);

// console.log(num);

// let name = 'Hammad Shaukat';

// function userName() {
//     console.log(name);
// }
// userName();

// var name = 'Hammad';
// var age = '20';

// console.log(`My name is ${name}. & I'm ${age} years old`);

// class Car {
//     constructor(brand, model){
//         this.carname = brand;
//         this.carmodel = model;
//     }
// }

// const carname = new Car('Ford', 2002);

// console.log(carname);

// let getData = async () => {
//     let promise = new Promise(function(resolve,reject){
//         let name = 'Hammad';
//         if(name === 'Hammad'){
//             resolve('We get the name');
//         }
//         else{
//             reject(`We did't get the name`);
//         }
//     })
//     let data = await promise;
//     console.log(data);
// }

// getData();

// class Car {
//     constructor (brand, model){
//         this.carname = brand;
//         this.carmodel = model;
//     }
// }

// class Detail extends Car{
//     constructor (brand, model ,specification){
//         super(brand, model)
//         this.carspecification = specification;
//     }
// }

// const carname = new Detail('Ford', 2002, 'very fast car');

// console.log(carname);

// let age = 11;

// if(age === 20){
//     console.log(age);
// }
// else if(age === 10){
//     console.log(age);
// }
// else{
//     console.log('dont get the age');
// }

// let age = 10;

// let check = age === 10 ? age : age === 20 ? age : 'dont get the name';

// console.log(check);