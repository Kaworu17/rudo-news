import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAQLtD-Yqo29vb0bBpaxQ0mvaB5EFX7vpE',
    authDomain: 'rudo-news-app.firebaseapp.com',
    databaseURL:
      'https://rudo-news-app-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'rudo-news-app',
    storageBucket: 'rudo-news-app.appspot.com',
    messagingSenderId: '432608115153',
    appId: '1:432608115153:web:7020f20aee9616d8f208f0',
  },
};

/* const app = initializeApp(environment.firebaseConfig);

const firestore = getFirestore(app); */

/* const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14');

console.log('hello', specialOfTheDay);

function writeDailySpecial() {
  const docData = {
    description: 'A delicius vanilla latte',
    price: 3.99,
    milk: 'Whole',
    vegan: false,
  };
  setDoc(specialOfTheDay, docData);
} */

/* const documentRef = doc(firestore, 'collectionName/newDocumentId');
const documentRef2 = doc(firestore, 'news/kXy1AsROI7mkAtRYqTVm');
const documentRef3 = doc(firestore, 'collectionName/newDocumentId2');
const data = { key: 'value' };
const dataAdd = { key2: 'value2' }; */

//Crear documento (sobreescribe si existe)
/* setDoc(documentRef, data);
console.log('Nuevo documento creado.'); */

//Update documento pero lanza error si no existe
/* updateDoc(documentRef, dataAdd);
console.log('Documento actualizado.'); */

//Crear documento si no existe y si existe sobbreescribe
/* setDoc(documentRef3, data, { merge: true });
console.log('Documento creado o actualizado.'); */

//leer documento
/* readDocument();
async function readDocument() {
  let mySnapshot = await getDoc(documentRef2);
  if (mySnapshot.exists()) {
    let docData = mySnapshot.data();
    console.log(`My data is ${JSON.stringify(docData)}`);
  }
}
 */
//escuchar documento cada vez que cambia
/* listedDocument();
function listedDocument() {
  onSnapshot(documentRef2, (docSnapshot) => {
    if (docSnapshot.exists()) {
      const docData = docSnapshot.data();
      console.log(`In real time, docData is ${JSON.stringify(docData)}`);
    }
  });
} */
