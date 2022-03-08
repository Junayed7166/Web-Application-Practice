// //Callback Function 
 
setTimeout(function(){
    document.getElementById('output').innerHTML = "output";

    }, 5000);
 

let persons = [
    {firstName: "Md", lastName: "Junayed"},
    {firstName: "Jannatul", lastName: "Ferdaus"}
]

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

 

function createPerson(person, callback) {
   setTimeout(function() {
       persons.push(person);
       callback();
   }, 2000); 
}

function getPerson() {
    setTimeout(function(){
        let output = '';
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`
        }); 
        document.getElementById('output').innerHTML = output;
    }, 500);
}

//setTimeout()
createPerson({firstName:"Rony", lastName: "Ahmed"}, getPerson)
//createPerson({firstName:"Rony", lastName: "Chy"})
