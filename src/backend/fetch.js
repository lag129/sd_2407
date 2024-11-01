"use strict";

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
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

export const addDataToFirebase = async (roomId, newData) => {
  const roomRef = doc(db, 'rooms', roomId);
  try {
    const docSnap = await getDoc(roomRef);

    if (docSnap.exists()) {
      // 既存のルームにデータを追加
      const existingData = docSnap.data().data || [];
      const updatedData = [...existingData, newData];
      await updateDoc(roomRef, {
        data: updatedData,
        updatedAt: new Date()
      });
      return { success: true, message: 'データを既存のルームに追加しました' };
    } else {
      // 新しいルームを作成してデータを追加
      await setDoc(roomRef, {
        data: [newData],
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return { success: true, message: '新しいルームを作成してデータを追加しました' };
    }
  } catch (error) {
    console.error('データの追加に失敗しました:', error);
    throw error;
  }
};

export const addDataToExistingRoom = async (roomId, newData) => {
  const roomRef = doc(db, 'rooms', roomId);
  try {
    const docSnap = await getDoc(roomRef);

    if (docSnap.exists()) {
      // 既存のルームにデータを追加
      const existingData = docSnap.data().data || [];
      const updatedData = [...existingData, newData];
      await updateDoc(roomRef, {
        data: updatedData,
        updatedAt: new Date()
      });
      return { success: true, message: 'データを追加しました' };
    } else {
      // ルームが存在しない場合はエラーをスロー
      throw new Error(`ルームID: ${roomId} は存在しません`);
    }
  } catch (error) {
    console.error('データの追加に失敗しました:', error);
    throw error;
  }
};

export const fetchDataFromFirebase = async (roomId) => {
  const roomRef = doc(db, 'rooms', roomId);
  try {
    const docSnap = await getDoc(roomRef);
    if (docSnap.exists()) {
      return docSnap.data().data || [];
    } else {
      console.log('指定されたroomIdのドキュメントが存在しません');
      return [];
    }
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    throw error;
  }
};

export const fetchData = async (collectionName) => {
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
