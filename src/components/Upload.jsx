import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && types.includes(selectedImage.type)) {
      setError(null);
      setImage(selectedImage);
    } else {
      setImage(null);
      setError('Please select an image file.');
    }
  };

  return (
    <form>
      <label>
        <input onChange={handleChange} type="file" />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {image && <ProgressBar file={image} setFile={setImage} />}
      </div>
    </form>
  );
};

export default Upload;
