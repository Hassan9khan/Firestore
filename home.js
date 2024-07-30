import { auth , db } from "./config.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 


const form = document.querySelector('#form')
const title = document.querySelector('#title')
const description = document.querySelector('#description')


form.addEventListener('submit', async (event)=>{
    event.preventDefault
    console.log(title.value);
    console.log(description.value);

    try {
        const docRef = await addDoc(collection(db, "users"), {
          title: title.value,
          description: description.value,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
})