import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvfmgTbJGgIm_8W5fvOkEUtlsy4mLI5Q4",
  authDomain: "bebidasvip-e16ba.firebaseapp.com",
  projectId: "bebidasvip-e16ba",
  storageBucket: "bebidasvip-e16ba.appspot.com",
  messagingSenderId: "121395427013",
  appId: "1:121395427013:web:f8ee1e3ebe4b581d68a2ac"
};

//1. Inicializar Firebase e inicializar FIRESTORE
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getDrinks() {
  const collectionRef = collection(db, "drinks");
  let results = await getDocs(collectionRef);

  let dataDrinks = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataDrinks;
}

export async function getDrink(idParams) {
  const docRef = doc(db, "drinks", idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}

export async function getDrinksByCategory(idCategoryParams) {
  const collectionRef = collection(db, "drinks");

  const queryCat = query(
    collectionRef,
    where("category", "==", idCategoryParams)
  );

  let results = await getDocs(queryCat);

  let datadrinks = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return datadrinks;
}

export async function createBuyOrder(orderData){
  const collectionRef = collection(db, "orders");
  let respuesta = await addDoc(collectionRef, orderData)
  return respuesta.id;
}

export default FirebaseApp;