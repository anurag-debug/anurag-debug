
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

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
const reqbtn = document.getElementById('mainlogin');
const username = document.getElementById('username');
const pass = document.getElementById('password');

const database = firebase.database();
database.ref('/login/').once('value',(snap)=>{
    var childData = snap.val();  
	user = childData.username; 
	passw = childData.password;
reqbtn.addEventListener('click', (e) => {
    e.preventDefault();
if(pass.value == passw &&username.value == user){
    location.href ="logindetails.html"
}
else{
    alert('Wrong details provided');
}

});
});