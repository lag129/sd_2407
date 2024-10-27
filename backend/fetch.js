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
  orderBy,
  where,
  arrayUnion,
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
      const existingData = docSnap.data().data || [];
      const updatedData = [...existingData, newData];
      await updateDoc(roomRef, { data: updatedData });
    } else {
      await setDoc(roomRef, { data: [newData] });
    }
    console.log('データの追加に成功しました');
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

// データを取得する関数
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

// ルームを作成する関数
export const createRoom = async (roomName, createdBy) => {
  try {
    const roomData = {
      name: roomName,
      createdBy,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    let docRef = await addDoc(collection(db, 'rooms'), roomData);
    // docRef.idを123456に固定する
    docRef = doc(db, 'rooms', '123456');
    console.log("Room created with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error creating room: ", e);
    throw e;
  }
};

// ルーム一覧を取得する関数
export const fetchRooms = async () => {
  try {
    const q = query(
      collection(db, 'rooms'),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const rooms = [];
    
    querySnapshot.forEach((doc) => {
      rooms.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return rooms;
  } catch (e) {
    console.error("Error fetching rooms: ", e);
    throw e;
  }
};

// ルーム内にメッセージを追加する関数
export const addMessage = async (roomId, message, userId) => {
  try {
    const messageData = {
      roomId,
      userId,
      message,
      createdAt: new Date()
    };
    
    const docRef = await addDoc(collection(db, 'messages'), messageData);
    
    // ルームの最終更新時刻を更新
    await setDoc(doc(db, 'rooms', roomId), {
      updatedAt: new Date()
    }, { merge: true });
    
    console.log("Message added with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding message: ", e);
    throw e;
  }
};

// 特定のルームのメッセージを取得する関数
export const fetchRoomMessages = async (roomId) => {
  try {
    const q = query(
      collection(db, 'messages'),
      where('roomId', '==', roomId),
      orderBy('createdAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const messages = [];
    
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return messages;
  } catch (e) {
    console.error("Error fetching room messages: ", e);
    throw e;
  }
};

// 特定のルームの情報を取得する関数
export const fetchRoomDetails = async (roomId) => {
  try {
    const roomDoc = await getDoc(doc(db, 'rooms', roomId));
    
    if (roomDoc.exists()) {
      return {
        id: roomDoc.id,
        ...roomDoc.data()
      };
    } else {
      throw new Error('Room not found');
    }
  } catch (e) {
    console.error("Error fetching room details: ", e);
    throw e;
  }
};