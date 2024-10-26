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

// ルームを作成する関数
export const createRoom = async (roomName, initialData = {}) => {
  try {
    // カスタムルームIDを生成（タイムスタンプと乱数の組み合わせ）
    const timestamp = new Date().getTime();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const roomId = `${timestamp}-${randomStr}`;
    
    // roomsコレクションに新しいルームを作成
    await setDoc(doc(db, 'rooms', roomId), {
      roomName,
      createdAt: new Date(),
      ...initialData
    });
    
    return roomId;
  } catch (e) {
    console.error("Error creating room: ", e);
    throw e;
  }
};

// ルームの存在確認
export const checkRoomExists = async (roomId) => {
  try {
    const roomDoc = await getDoc(doc(db, 'rooms', roomId));
    return roomDoc.exists();
  } catch (e) {
    console.error("Error checking room: ", e);
    throw e;
  }
};

// ルーム内にデータを追加する関数
export const addRoomData = async (roomId, data) => {
  try {
    // ルームの存在確認
    const exists = await checkRoomExists(roomId);
    if (!exists) {
      throw new Error("Room does not exist");
    }

    // ルーム内のmessagesサブコレクションにデータを追加
    const docRef = await addDoc(
      collection(db, 'rooms', roomId, 'messages'), 
      {
        ...data,
        createdAt: new Date()
      }
    );
    return docRef.id;
  } catch (e) {
    console.error("Error adding data to room: ", e);
    throw e;
  }
};

// ルーム内のデータを取得する関数
export const fetchRoomData = async (roomId) => {
  try {
    // ルームの存在確認
    const exists = await checkRoomExists(roomId);
    if (!exists) {
      throw new Error("Room does not exist");
    }

    // ルーム内のmessagesを取得
    const q = query(
      collection(db, 'rooms', roomId, 'messages'),
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
    console.error("Error fetching room data: ", e);
    throw e;
  }
};

// ルーム情報を取得する関数
export const getRoomInfo = async (roomId) => {
  try {
    const roomDoc = await getDoc(doc(db, 'rooms', roomId));
    if (!roomDoc.exists()) {
      throw new Error("Room does not exist");
    }
    return {
      id: roomDoc.id,
      ...roomDoc.data()
    };
  } catch (e) {
    console.error("Error getting room info: ", e);
    throw e;
  }
};