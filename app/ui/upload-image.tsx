"use client";

import { File } from "buffer";
import React, { useState } from "react";

export default function UploadImage() {
  const [fileLabel, setFileLabel] = useState("+");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    if (file.length < 1) {
      return;
    }

    if (file) {
      setFileLabel("Ganti");
      setSelectedImage(file);
    } else {
      setFileLabel("+");
    }
  };

  return (
    <div className="flex flex-col items-center w-40 h-40 rounded border-dotted border-black border-2">
      <label className="flex  justify-center items-center w-full h-full text-black font-bold rounded cursor-pointer">
        <span id="file-chosen" className="text-5xl">
          {fileLabel}
        </span>
        <input
          type="file"
          id="file-input"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
