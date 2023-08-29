import { Firestore, db } from "../db/fb.config";
import {
  getFirestore,
  setDoc,
  collection,
  getDocs,
  doc,
} from "firebase/firestore/lite";

export function LoadItem() {}

export function SaveItem(collectionName, data) {
  console.log("SaveItem", data);
}

// Get a list of cities from your database
export async function LoadItems(collectionName) {
  const citiesCol = collection(Firestore, "koops");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

export async function AddKoop(koop) {
  const res = await setDoc(doc(db, "koops", Math.random().toString()), koop);
  console.log(res);
}
