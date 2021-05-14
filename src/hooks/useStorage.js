import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from 'config/firebase';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (e) => setError(e),
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        const name = file.name;
        collectionRef.add({ url, name, createdAt });
        setUrl(url);
      }
    );
    return () => {};
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
