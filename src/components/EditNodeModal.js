import React, { useState, useEffect } from 'react';

const EditNodeModal = ({ node, isOpen, onClose, onSave, groups }) => {
  const [name, setName] = useState(node.name);
  const [group, setGroup] = useState(node.group);

  useEffect(() => {
    setName(node.name);
    setGroup(node.group);
  }, [node]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ ...node, name, group });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Node</h2>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
        <label>
          Group:
          <select 
            value={group} 
            onChange={(e) => setGroup(e.target.value)}
          >
            {groups.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </label>
        <div className="modal-actions">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditNodeModal;