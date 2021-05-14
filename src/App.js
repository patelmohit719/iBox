import React, { useState } from 'react';
import Title from 'components/Title';
import Upload from 'components/Upload';
import Image from 'components/Image';
import Modal from 'components/Modal';

function App() {
  const [viewImage, setImage] = useState(null);

  return (
    <div className="App">
      <Title />
      <Upload />
      <Image setImage={setImage} />
      {viewImage && <Modal image={viewImage} setImage={setImage} />}
    </div>
  );
}

export default App;
