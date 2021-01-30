var firebaseConfig = {
    apiKey: "AIzaSyA9JLWVdm6wKZvok9RUQYzLQRxp6QpoPu8",
    authDomain: "form-d53e8.firebaseapp.com",
    databaseURL: "https://form-d53e8-default-rtdb.firebaseio.com",
    projectId: "form-d53e8",
    storageBucket: "form-d53e8.appspot.com",
    messagingSenderId: "422389337191",
    appId: "1:422389337191:web:11ad926c52e4ba1ae318c2"
  };

  firebase.initializeApp(firebaseConfig);

  var messageRef = firebase.database().ref('messages');

  document.getElementById('form').addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();

       var name = getInput("name");
       var email = getInput("email");
       var phone = getInput("phone");
       var message = getInput("message");
    
       saveMessage(name, email, phone, message);

       document.getElementById('form').reset();
  }

   function getInput(id){
       return document.getElementById(id).value;
   }

   function saveMessage(name, email, phone, message){
       var newMessageRef = messageRef.push();
       newMessageRef.set({
           name: name,
           email: email,
           phone: phone,
           message: message
       });
   }