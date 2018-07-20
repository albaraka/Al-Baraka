  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsjzVfJko4dDR8Na4GPrhqh610OlWy26Y",
    authDomain: "formulaire-fire-base.firebaseapp.com",
    databaseURL: "https://formulaire-fire-base.firebaseio.com",
    projectId: "formulaire-fire-base",
    storageBucket: "",
    messagingSenderId: "1090429615215"
  };
  firebase.initializeApp(config);

var mekla = firebase.database().ref("mekla");




function getInputVal(id){
    return document.getElementById(id).value;
}
document.getElementById("form").addEventListener("submit",submitForm);
console.log("heyy");
function submitForm(e){
    e.preventDefault();
    console.log("hhh")
    var nom = getInputVal("nom");
    var prenom=getInputVal("prenom");
    var email=getInputVal("email");
    var tel = getInputVal("tel");
    var date = getInputVal("date");
    var nb = getInputVal("nb");
    var info = getInputVal("msg");
    console.log(nom);
    saveMekla(nom,prenom,email,tel,date,nb,info);

}
function saveMekla(nom,prenom,email,tel,date,nb,info){
    var newMekla=mekla.push();
    newMekla.set({
        nom:nom,
        prenom :prenom,
        email:email,
        tel:tel,
        date:date,
        nb:nb,
        info:info
    });
}