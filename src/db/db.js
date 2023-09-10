import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore/lite";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import { v4 as uuidv4 } from "uuid";
import { Firestore, db, auth } from "../db/fb.config";

import { signInWithPhoneNumber } from "firebase/auth";
import { getRandomFileName } from "../utils/utils";

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

  //console.log(res); */
}

// Upload file using standard upload
export async function uploadFile(
  file,
  onUploadProgress,
  onUploadError,
  onFileUploaded
) {
  if (file === undefined) {
    console.log("file undefined ...", file);
    return;
  }

  const storage = getStorage();
  const { type, name } = file;
  const ext = name.split(".")[name.split(".").length - 1];
  const newFileName = `${getRandomFileName()}.${ext}`;
  const storageFilePath = "images/" + newFileName;

  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: type, //"image/jpeg",
  };

  if (!type.includes("image")) {
    onUploadError("Please select an image file");
    return;
  }

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, storageFilePath);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  console.log("Uploading start ...\nNew file name : ", newFileName);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //console.log("Upload is " + progress + "% done");
      onUploadProgress(progress);
      switch (snapshot.state) {
        case "paused":
          //console.log("Upload is paused");
          break;
        case "running":
          //console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      onUploadError(error);
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;

        // ...

        case "storage/unknown":
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        onFileUploaded({
          downloadURL: downloadURL,
          storageFilePath: storageFilePath,
        });
        //console.log("File available at", downloadURL);
      });
    }
  );
}

export async function deleteFile(filePath, onFileDeleted, onFileDeleteError) {
  const storage = getStorage();

  // Create a reference to the file to delete
  const desertRef = ref(storage, filePath);

  // Delete the file
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully

      onFileDeleted();
    })
    .catch((error) => {
      // Uh-oh, an error occurred!
      onFileDeleteError(error);
    });
}
