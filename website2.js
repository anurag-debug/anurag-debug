
  var firebaseConfig = {
    apiKey: "AIzaSyCtd6FjTqtBf7qoPO0BndBv5jixhBHyKbw",
    authDomain: "digipplus-db04e.firebaseapp.com",
    projectId: "digipplus-db04e",
    storageBucket: "digipplus-db04e.appspot.com",
    messagingSenderId: "497030875944",
    appId: "1:497030875944:web:8ac9e8d3dee450ee755e1d",
    measurementId: "G-MQC3HTDX6N"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();











var form = document.getElementById('requestcallform');
const name1 = document.getElementById('requestcallitem2name');
const number = document.getElementById('requestcallitem2name1');
const email = document.getElementById('requestcallitem2name2');
const reqbtn = document.getElementById('reqbtn');



const database = firebase.database();

reqbtn.addEventListener('click', (e) => {
e.preventDefault();

if(document.getElementById('requestcallitem2name').value==''||
   document.getElementById('requestcallitem2name1').value==''||
   document.getElementById('requestcallitem2name2').value==''){
alert("Enter your details please.")
  }
  else{
   
database.ref('/users/'+number.value).set({

  name: name1.value,
  email: email.value,
  number: number.value,
  college: '-',
  semester: '-',
  typeofinternship: '-',
  service: '-',
  profession: '-'
});

alert("We have recived your details and we will contact you very soon");
document.getElementById('requestcallitem2name').value='';
document.getElementById('requestcallitem2name1').value='';
document.getElementById('requestcallitem2name2').value='';
}
});






const lastbtn = document.getElementById('lastbtn');
var current = new Date();
const subscribeinput = document.getElementById('lastsubscribeinput');
const subscribenum = document.getElementById('lastsubscribephone');

// const database = firebase.database();
lastbtn.addEventListener('click', (e) => {
e.preventDefault();

if(subscribeinput.value==''||subscribenum.value==''){
alert("Enter your details please.")
  }
  else{
  
database.ref('/users/'+subscribenum.value).set({

  name: '-',
  email: subscribeinput.value,
  number: subscribenum.value,
  college: '-',
  semester: '-',
  typeofinternship: '-',
  service: '-',
  profession: '-'
});

alert("We have recived your details and we will contact you very soon");
subscribeinput.value='';
subscribenum.value='';
}
});



// database.ref('/users/').on('value',(snap)=>{
//   var key = childSnapshot.key;
//   var childData = childSnapshot.val();              

//   var name_val = childSnapshot.val().name;
//   var id_val = childSnapshot.val().email;
//   var num = childSnapshot.val().number;

//   $("#recievename").append(name_val);
//   $("#recieveemail").append(id_val);
//   $("#recievenumber").append(num);
// });













// firebase.database().ref('data').on('value',(snap)=>{
//   console.log(snap.val());
// });



// var ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });














// function submit(){
//   if(document.getElementById('requestcallitem2name').value==''||
//   document.getElementById('requestcallitem2name1').value==''||
//   document.getElementById('requestcallitem2name2').value==''){
// alert("Enter your details please.")
//   }
//   else{
//     database.ref('/users/'+number.value).set({

//       name: name1.value,
//       email: email.value,
//       number: number.value
//     });
//     document.getElementById('requestcallitem2name').value=='';
//   document.getElementById('requestcallitem2name1').value=='';
//   document.getElementById('requestcallitem2name2').value=='';
//     alert("We have recived your details and we will contact you very soon");

//   }
// }

















































































// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

// var professionsRef = firebase.database().ref('professions');
// //Listen for form submit
// document.getElementById('requestcallform').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('requestcallitem2name');
//   var phone = getInputVal('requestcallitem2name1');
//   var email = getInputVal('requestcallitem2name2');
// //   var phone = getInputVal('phone');
// //   var profession = getInputVal('profession');
//   // console.log(name);
//   // console.log(phone);
//   // console.log(email);
//   saveMessage(name, phone, email);
// }

// // Function to get get form values
// function getInputVal(id){
//     return document.getElementById(id).value;
//   }

// // Save profession to firebase
// function saveMessage(name, phone, email){
//   var newMessageRef = professionsRef.push();
//   newMessageRef.set({
//     name: name,
//     email:email,
//     phone:phone,
//   });
// }
