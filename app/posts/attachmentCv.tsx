"use client"
import React, { useState } from 'react';
import { postPDF } from '../api/parser/route';
import styles from './[slug]/SinglePage.module.css'

const AttachmentCv= () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a PDF file');
      return;
    }

    const apiKey ="0HBG2pZamsaSTAU489mU6aPHyebOONl9380Jp5lS";
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await postPDF(formData, apiKey);
      const responseData = await response.json();
   
      console.log(responseData );
      alert('File uploaded successfully');
      setFile(null)
    } catch (error) {
      console.error(error);
      alert('Error uploading file');
      setFile(null)
    }
  };

  return (
    <div>
      <h4>Send your CV</h4>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button className={styles.buttonApply} onClick={handleUpload}>Upload CV</button>
    </div>
  );
};

export default AttachmentCv;
