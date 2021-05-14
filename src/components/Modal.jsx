import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ image, setImage }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains('backdrop')) setImage(null);
  };

  return (
    image && (
      <motion.div
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="backdrop"
      >
        <motion.img initial={{ y: '-100vh' }} animate={{ y: 0 }} src={image.url} alt={image.name} />
      </motion.div>
    )
  );
};

export default Modal;
