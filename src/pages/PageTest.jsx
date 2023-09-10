//React audio recorder
import React, { useState, useRef } from "react";
import { Line, Circle } from "rc-progress";
import { deleteFile, uploadFile } from "../db/db";

function AudioRecorderPlayer() {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [uploadedAudioBlob, setUploadedAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunks.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          setAudioBlob(audioBlob);

          console.log(audioBlob.size + " bytes");
        };

        mediaRecorder.start();
        setRecording(true);

        setTimeout(() => {
          mediaRecorder.stop();
          stream.getTracks().forEach((track) => track.stop());
          setRecording(false);
        }, 5000); // Record for 5 seconds (adjust as needed)
      })
      .catch((error) => console.error("Error accessing microphone:", error));
  };

  const playAudio = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedAudioBlob(file);
    }
  };

  const uploadAudio = () => {
    if (uploadedAudioBlob) {
      // Create a FormData object and append the audio file
      const formData = new FormData();
      formData.append("audioFile", uploadedAudioBlob);

      // Now you can send the formData to your server using an HTTP request
      // For example, you can use fetch() or Axios to post the formData to your server
      // Replace the URL and method with your server details
      fetch("/your-upload-url", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          // Handle the server response as needed
          console.log("Upload successful:", response);
        })
        .catch((error) => {
          console.error("Upload error:", error);
        });
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>
        {recording ? "Recording..." : "Start Recording"}
      </button>
      <button onClick={playAudio} disabled={!audioBlob}>
        Play Audio
      </button>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        ref={fileInputRef}
      />
      <button onClick={uploadAudio} disabled={!uploadedAudioBlob}>
        Upload Audio
      </button>
      <audio ref={audioRef} controls />

      <>
        <Line percent={10} strokeWidth={4} strokeColor="green" />
        <Circle percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
      </>
    </div>
  );
}

function FileUploader({ auto, id, notifyUploadDone }) {
  const [file, setFile] = useState();
  const [pct, setpct] = useState(0);
  const [uploadFinished, setUploadFinished] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [storageFilePath, setStorageFilePath] = useState();

  function onChange(e) {
    const f = e.target.files[0];
    setFile(f);

    console.log(e);

    if (auto) {
      startUpload();
    }
  }

  function startUpload() {
    console.log("startUpload");
    setStorageFilePath(undefined);
    setShowProgress(true);
    setpct(0);
    uploadFile(file, onUploadProgress, onUploadError, onFileUploaded);
    setUploadFinished(false);
  }

  function onUploadProgress(pct) {
    console.log("onProgress - pct : ", pct);
    setpct(pct);
  }

  function onUploadError(error) {
    console.log("onError", error);
    //alert(error);
    setShowProgress(false);
    setStorageFilePath(undefined);
  }

  function onFileUploaded(storeInfo) {
    //console.log("onDone", JSON.stringify(stroreInfo));
    //alert(downloadLink);
    setShowProgress(false);
    setUploadFinished(true);
    setStorageFilePath(storeInfo.storageFilePath);
    notifyUploadDone({ ...storeInfo, id: id });
  }

  function onFileDeleted() {
    alert("File deleted!");
    console.log("File deleted!");
  }

  function onFileDeleteError(error) {
    console.log("onFileDeleteError", error);
  }

  async function onReset(e) {
    const res = await deleteFile(
      storageFilePath,
      onFileDeleted,
      onFileDeleteError
    );
    console.log("Res delete : ", res);
    setStorageFilePath(undefined);
    setUploadFinished(false);
    setFile(undefined);
    console.log(e);
  }

  async function onUploadFile(e) {
    if (file !== undefined) {
      startUpload();
    } else {
      //alert("Please select a file first!");
    }
  }

  return (
    <div className="flex flex-col">
      <input
        className={` ${uploadFinished ? "hidden" : ""} `}
        type="file"
        onChange={onChange}
      />
      <div className={` ${!uploadFinished ? "hidden" : ""} `}>
        <button onClick={(e) => onReset(e)}>RE-UPLOAD</button>
      </div>
      <progress
        className={` ${showProgress ? "" : "hidden"} `}
        value={pct}
        max={100}
      />
      {auto || <button onClick={onUploadFile}>Upload File</button>}
    </div>
  );
}

function MultiFileUploaderCont({ notifyUploadDone, count = 3 }) {
  return (
    <div>
      {[...Array(count)].fill(0).map((it, i) => (
        <FileUploader auto id={i} notifyUploadDone={notifyUploadDone} />
      ))}
    </div>
  );
}

export default function PageTest({}) {
  function notifyUploadDone(stroreInfo) {
    console.log(`notifyUploadDone ${JSON.stringify(stroreInfo)}`);
  }

  return (
    <div>
      {/* <AudioRecorderPlayer /> */}
      <MultiFileUploaderCont notifyUploadDone={notifyUploadDone} />
    </div>
  );
}
