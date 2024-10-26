"use strict";

import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs,
  doc,
  getDoc,
  setDoc,
  query,
  orderBy
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD70AvA7AcBcTT_E5LI3KH7BxXnxiKRgOQ",
  authDomain: "sd2407-e7573.firebaseapp.com",
  projectId: "sd2407-e7573",
  storageBucket: "sd2407-e7573.appspot.com",
  messagingSenderId: "119853815011",
  appId: "1:119853815011:web:18f9096ac82522d221a1d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// データを追加する関数
export const addRoomData = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// データを取得する関数
export const fetchRoomData = async (collectionName) => {
  try {
    const q = query(
      collection(db, collectionName),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const documents = [];
    
    querySnapshot.forEach((doc) => {
      documents.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return documents;
  } catch (e) {
    console.error("Error fetching documents: ", e);
    throw e;
  }
};