//FileUploader.js

import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      axios
        .post('/upload', formData)
        .then((response) => {
          setUploadStatus('File uploaded successfully!');
        })
        .catch((error) => {
          setUploadStatus('File upload failed!');
          console.error(error);
        });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUploader;
