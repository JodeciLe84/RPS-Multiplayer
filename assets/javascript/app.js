// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "employee-data-management-2e2dd.firebaseapp.com",
  databaseURL: "https://employee-data-management-2e2dd.firebaseio.com",
  projectId: "employee-data-management-2e2dd",
  storageBucket: "",
  messagingSenderId: "115108886081"
};
firebase.initializeApp(config);

var database = firebase.database()

var name =""
var role =""
var startDate = "01/12/1992"
var montlyRate = ""
var currentDate = new Date()
var currentYear = new Date()

currentDate =currentDate.getFullYear()
currentYear.getDate()
console.log(currentYear)


$("#submit").on("click", function(e){

    e.preventDefault()
    database.ref().push({
        name : $("#addEmployee").val().trim(),
        role : $("#addRole").val().trim(),
        startDate : $("#startDate").val().trim(),
        montlyRate : $("#monthlyRate").val().trim() 
    })
console.log(name)
// $("#submit").on("click", function(){
//     database.ref().push({
//         name : "Mark",
//         role : "Student",
//         startDate : "01/04/18",
//         montlyRate : "1,000" 
//     })
    
})

// database.ref().on("child_added", function()){
//     console.log("hi")
// }

database.ref().orderByChild('number').limitToLast(1).on("child_added", function(snap){
    console.log("hi")
    console.log(snap)
})
//moment.js
// var date = moment('09/08/2009','MM/DD/YYYY').format('ddd MMM/Do, YYYY hh:mm A').valueOf()
// console.log(moment(moment(date).format('ddd MMM Do, YYYY')))




