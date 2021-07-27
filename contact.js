// Contact form firebase
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAG17yrJ8WzIXi8Po1egxShC5le99EBjWw",
    authDomain: "portfolio31-4d258.firebaseapp.com",
    projectId: "portfolio31-4d258",
    storageBucket: "portfolio31-4d258.appspot.com",
    messagingSenderId: "1082749790445",
    appId: "1:1082749790445:web:b13b784f99a2c6f841c4e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contactform').addEventListener('submit' , submitform);

//submit form
function submitform(e){
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');


    //save message
   saveMessage(name , email , phone);

   // show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 sec
   setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
   },3000);

   // clear form
   document.getElementById('contactform').reset();

}   

//function to get  form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save messages to firebase
function saveMessage(name , email , phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        phone : phone,
    });
}