
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA3iA9mWdXCGd-w1jvtPxTXM2c4WKNHL0w",
    authDomain: "kwitter-9c2fc.firebaseapp.com",
    databaseURL: "https://kwitter-9c2fc-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c2fc",
    storageBucket: "kwitter-9c2fc.appspot.com",
    messagingSenderId: "87191761882",
    appId: "1:87191761882:web:1329d0c3bbe361d13986e3"
  };
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
