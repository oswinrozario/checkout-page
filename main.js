// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyCWfItv8JQSEz6q5k9vMXKPPf9u4qS5_0c",
    authDomain: "register-gamezone.firebaseapp.com",
    databaseURL: "https://register-gamezone-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "register-gamezone",
    storageBucket: "register-gamezone.appspot.com",
    messagingSenderId: "960549317379",
    appId: "1:960549317379:web:e3199fc0432e0104f29736"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('registeredUsers');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var age = getInputVal('phone');
  var gen = getInputVal('city');
  var loc = getInputVal('country');

  // Save message
  saveMessage(name, company, email, age,gen,loc);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, age,gen,loc){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    age:age,
    gender:gen,
    location:loc,
  });
}