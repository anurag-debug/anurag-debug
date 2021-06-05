
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











var form = document.getElementById('careerform');
const name1 = document.getElementById('name');
const number = document.getElementById('PHNO.');
const email = document.getElementById('email');
const reqbtn = document.getElementById('sendmsg');
const service = document.getElementById('service');
const profession = document.getElementById('profession');


const database = firebase.database();

reqbtn.addEventListener('click', (e) => {
e.preventDefault();

if(document.getElementById('name').value==''||
   document.getElementById('PHNO.').value==''||
   document.getElementById('email').value==''||
   document.getElementById('profession').value==''||
   document.getElementById('service').value==''){
alert("Enter your details please.")
  }
  else{
   
database.ref('/users/'+number.value).set({

  name: name1.value,
  email: email.value,
  number: number.value,
  college: '-',
  semester:'-',
  typeofinternship: '-',
  service: service.value,
  profession: profession.value
});

alert("We have recived your details and we will contact you very soon");
document.getElementById('name').value='';
document.getElementById('PHNO.').value='';
document.getElementById('email').value='';
document.getElementById('profession').value='';
document.getElementById('service').value='';

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
