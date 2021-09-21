document.getElementById("login_div").addEventListener("submit",(event)=>{
    event.preventDefault()
})


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

 function googleSignIn(){
    provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result){
      console.log(result);
      alert("Success..Signed in with google");
      window.location = 'blog.html';
    }).catch(function(err){
      console.log(err);
      alert("Failed");

    });
  }

function register(){
    var userEmail = document.getElementById("email_field").value
    var userPass = document.getElementById("password_field").value
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function logout(){
  firebase.auth().signOut();
}
