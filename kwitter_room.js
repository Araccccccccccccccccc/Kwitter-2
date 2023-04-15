var firebaseConfig = {
      apiKey: "AIzaSyAVbB-gpoUH-Y7yVw_JvpqbHv3uy2ztkDU",
      authDomain: "kwitter-503c9.firebaseapp.com",
      databaseURL: "https://kwitter-503c9-default-rtdb.firebaseio.com",
      projectId: "kwitter-503c9",
      storageBucket: "kwitter-503c9.appspot.com",
      messagingSenderId: "801710194114",
      appId: "1:801710194114:web:04a8dd4f2dbcafed3aea5b"
    };
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " +Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "add room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location ="kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html"
}
