//React audio recorder
import React, { useState, useRef } from "react";

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
    </div>
  );
}
export default function PageTest({}) {
  return (
    <div>
      cool
      <AudioRecorderPlayer />
    </div>
  );
}
