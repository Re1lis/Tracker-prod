import React, { useEffect } from "react";
import "./shop.css";

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
