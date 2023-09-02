import { Firestore, db } from "../db/fb.config";
import { v4 as uuidv4 } from "uuid";
import {
  getFirestore,
  setDoc,
  collection,
  getDocs,
  query,
  orderBy,
  doc,
} from "firebase/firestore/lite";
import { COLLECTION_NAME } from "./fb";

// Get a list of cities from your database
export async function LoadKoops() {
  const citiesCol = collection(Firestore, "koops");
  const q = query(citiesCol, orderBy("date", "desc"));
  const citySnapshot = await getDocs(q);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList.sort();
}

export async function AddKoop(koop) {
  koop.id = uuidv4();
  const res = await setDoc(doc(db, COLLECTION_NAME.KOOPS, koop.id), koop);
  return res;
}
