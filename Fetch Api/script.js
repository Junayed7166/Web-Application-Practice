// //Callback Function 

setTimeout(function(){
    //document.getElementById('output').innerHTML = "output";
    console.log("Hello World!");
}, 5000);

// let persons = [
//     {firstName: "Simanta", lastName: "Paul"},
//     {firstName: "Fazle", lastName: "Rahat"}
// ]

// function createPerson(person) {
//    setTimeout(function() {
//        persons.push(person);
//        getPerson();
//    }, 1000); 
// }

// function getPerson() {
//     setTimeout(function(){
//         let output = '';
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         }); 
//         document.getElementById('output').innerHTML = output;
//     }, 1000);
// }

// // let persons = [
// //     {firstName: "Simanta", lastName: "Paul"},
// //     {firstName: "Fazle", lastName: "Rahat"}
// // ]

// // function createPerson(person, callback) {
// //    setTimeout(function() {
// //        persons.push(person);
// //        callback();
// //    }, 2000); 
// // }

// // function getPerson() {
// //     setTimeout(function(){
// //         let output = '';
// //         persons.forEach(function(person){
// //             output += `<li>${person.firstName} ${person.lastName}</li>`
// //         }); 
// //         document.getElementById('output').innerHTML = output;
// //     }, 500);
// // }

// //setTimeout()
// //createPerson({firstName:"Rony", lastName: "Chy"}, getPerson)
// createPerson({firstName:"Rony", lastName: "Chy"})