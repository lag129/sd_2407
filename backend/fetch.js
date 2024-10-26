"use strict";

import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD70AvA7AcBcTT_E5LI3KH7BxXnxiKRgOQ",
  authDomain: "sd2407-e7573.firebaseapp.com",
  projectId: "sd2407-e7573",
  storageBucket: "sd2407-e7573.appspot.com",
  messagingSenderId: "119853815011",
  appId: "1:119853815011:web:18f9096ac82522d221a1d6"
};

class FirestoreService {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.db = firebase.firestore();
  }

  // Method to get documents from 'rooms' collection
  async getRooms() {
    try {
      const snapshot = await this.db.collection('rooms').get();
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }

  // Method to create a new document in 'rooms' collection
  async createRoom(data) {
    try {
      const docRef = await this.db.collection('rooms').add(data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  // Method to get documents from 'elements' subcollection
  async getElements(roomId) {
    try {
      const snapshot = await this.db.collection('rooms').doc(roomId).collection('elements').get();
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  }

  // Method to create a new document in 'elements' subcollection
  async createElement(roomId, data) {
    try {
      const docRef = await this.db.collection('rooms').doc(roomId).collection('elements').add(data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
}

export { FirestoreService };