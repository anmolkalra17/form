var firebaseConfig = {
    apiKey: "xxxxxxxxxx",
    authDomain: "xxxxxxxxxx",
    databaseURL: "xxxxxxxxxx",
    projectId: "xxxxxxxx",
    storageBucket: "xxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxx",
    appId: "xxxxxx"
  };

  firebase.initializeApp(firebaseConfig);

  var messageRef = firebase.database().ref('messages');

  document.getElementById('form').addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();
       var email = getInput("email");
    
       saveMessage(email);

       document.getElementById('form').reset();
  }

   function getInput(id){
       return document.getElementById(id).value;
   }

   function saveMessage(email){
       var newMessageRef = messageRef.push();
       newMessageRef.set({
           email: email,
       });
   }
