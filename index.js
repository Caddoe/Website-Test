 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAif-q-77Avd-Q0wVpj2abhnYVjL64Cka0",
   authDomain: "websitetesting-3600f.firebaseapp.com",
   projectId: "websitetesting-3600f",
   storageBucket: "websitetesting-3600f.appspot.com",
   messagingSenderId: "11612895724",
   appId: "1:11612895724:web:c00b683d4401b25aa9e8c9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 import {
     getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField
 } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"

 const db = getFirestore()


 let Namebox = document.getElementById("Namebox");

 let Upload = document.getElementById("Upload");
 let Retrieve = document.getElementById("Retrieve");
 let Update = document.getElementById("Update");
 let Delete = document.getElementById("Delete");

 async function customid(){
     var ref = doc(db, "NamesList", "16");

     const docRef = await setDoc(
         ref, {
             Name:Namebox.value
         }
     )
     .then(()=>{
         alert("It Was Successful");
     })
     .catch((error)=>{
         alert("Error=" + error);
     })
 }

 async function getADocument(){
     var ref = doc(db, "NamesList", "16")
     const docSnap = await getDoc(ref);
     if(docSnap.exists){
         Namebox.value = docSnap.data().Name;
     }
     else{
         alert("Something Went Wrong")
     }
 }

 Upload.addEventListener("click", customid);
 Retrieve.addEventListener("click", getADocument);
 Update.addEventListener("click");
 Delete.addEventListener("click");
