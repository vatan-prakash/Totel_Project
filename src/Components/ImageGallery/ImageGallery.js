

import React, { useState } from 'react';
import styles from '../../styles/ImageGallery.module.css';

const ImageGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const images = Array.from(files).map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });
    Promise.all(images).then((imageDataUrls) => {
      setSelectedImages([...selectedImages, ...imageDataUrls]);
    });
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const handleImageCut = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div className={styles.imageGallery}>
      <h1>Image Gallery</h1>
      <input type="file" onChange={handleImageChange} multiple />
      {selectedImages.length > 0 ? (
        <div className={styles.imageContainer}>
          {selectedImages.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={image}
                alt={`Selected Image ${index + 1}`}
                className={styles.selectedImage}
              />
              <div className={styles.imageButtons}>
                <button
                  className={styles.deleteButton} 
                  onClick={() => handleImageDelete(index)}
                >
                  Delete 
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noImage}>No images selected</p>
      )}
    </div>
  );
};

export default ImageGallery;
