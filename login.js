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



//   console.log(newElement);
  
const delbtn = document.getElementById('delbtn');


const database = firebase.database();
var del = new Array();
database.ref('/users/').once('value',(snap)=>{
    var childData = snap.val();              
    var key = Object.keys(childData);
    for(i=0;i<key.length;i++){
      var nameget = childData[key[i]].name;
      var emailget = childData[key[i]].email;
      var numberget = childData[key[i]].number;
      var collegeget = childData[key[i]].college;
      var semesterget = childData[key[i]].semester;
      var typeofinternshipget = childData[key[i]].typeofinternship;
      var serviceget = childData[key[i]].service;
      var professionget = childData[key[i]].profession;           
    document.querySelector('#serialnumber').innerHTML +=(i+1)+'<br><br><br><br>';
    document.querySelector('#readname').innerHTML +=nameget+'<br><br><br><br>';
    document.querySelector('#reademail').innerHTML +=emailget+'<br><br><br><br>';
    document.querySelector('#readnumber').innerHTML +=numberget+'<br><br><br><br>';
    document.querySelector('#college').innerHTML +=collegeget+'<br><br><br><br>';
    document.querySelector('#semester').innerHTML +=semesterget+'<br><br><br><br>';
    document.querySelector('#typeofinternship').innerHTML +=typeofinternshipget+'<br><br><br><br>';
    document.querySelector('#service').innerHTML +=serviceget+'<br><br><br><br>';
    document.querySelector('#profession').innerHTML +=professionget+'<br><br><br><br>';
    let btn = document.createElement("button");
    del[i]=numberget;
    btn.innerHTML = i+1;
    btn.onclick = function(){
      var txt;
      var r = confirm("Do you really want to delete this enquiry?");
      if (r == true) {
        database.ref('/users/'+del[btn.innerHTML-1]).remove();
        location.reload();
        txt = "You pressed OK!";
      } else {
        txt = "You pressed Cancel!";
      }
     
    
    }
    delbtn.appendChild(btn);
    btn.className="delbtn"
    }
    
  });

  
