import React, { useState, useEffect } from 'react';

const EditLinkModal = ({ link, isOpen, onClose, onSave }) => {
  const [value, setValue] = useState(link.value);

  useEffect(() => {
    setValue(link.value);
  }, [link]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ ...link, value });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Link</h2>
        <label>
          Label:
          <input 
            type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
          />
        </label>
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditLinkModal;
