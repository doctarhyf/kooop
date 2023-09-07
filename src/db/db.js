import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";
import { Firestore, db, auth } from "../db/fb.config";

import { signInWithPhoneNumber } from "firebase/auth";

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

export function LoggedInUser(debugMode) {
  const user = localStorage.getItem("koopUser") || false;

  if (debugMode) return { phone: "0893092849", displayename: "docta rhyf" };

  return user ? JSON.parse(user) : false;
}

export async function SignInWithPhoneNumber(phoneNumber) {
  let verify = new firebase.auth.auth.RecaptchaVerifier("sign-in-button");
  auth
    .signInWithPhoneNumber(mynumber, verify)
    .then((result) => {
      setfinal(result);
      alert("code sent");
      setshow(true);
    })
    .catch((err) => {
      alert(err);
      window.location.reload();
    });

  /* const res = await signInWithPhoneNumber(auth, phoneNumber, null);

  console.log(res); */
}
