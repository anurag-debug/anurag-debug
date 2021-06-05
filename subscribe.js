var firebaseConfig = {
  apiKey: "AIzaSyCtd6FjTqtBf7qoPO0BndBv5jixhBHyKbw",
  authDomain: "digipplus-db04e.firebaseapp.com",
  projectId: "digipplus-db04e",
  storageBucket: "digipplus-db04e.appspot.com",
  messagingSenderId: "497030875944",
  appId: "1:497030875944:web:8ac9e8d3dee450ee755e1d",
  measurementId: "G-MQC3HTDX6N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const lastbtn = document.getElementById('lastbtn');
var current = new Date();
const subscribeinput = document.getElementById('lastsubscribeinput');
const subscribenum = document.getElementById('lastsubscribephone');

const database = firebase.database();
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























