import React, { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "../App.css";

const imgz = [
  {
    original: "./koopintro.jpg",
    thumbnail: "./koopintro.jpg",
  },
  {
    original: "https://fretur.us/diapo/alfa.jpg",
    thumbnail: "https://fretur.us/diapo/alfa.jpg",
  },
  {
    original: "https://fretur.us/diapo/ps.jpg",
    thumbnail: "https://fretur.us/diapo/ps.jpg",
  },
  {
    original: "https://fretur.us/diapo/sat.jpg",
    thumbnail: "https://fretur.us/diapo/sat.jpg",
  },
  {
    original: "https://fretur.us/diapo/ship.jpg",
    thumbnail: "https://fretur.us/diapo/ship.jpg",
  },
];

export default function MyImageGallery({ images }) {
  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {}

  return (
    <>
      <ImageGallery items={imgz} autoPlay={true} useTranslate3D={true} />
    </>
  );
}
