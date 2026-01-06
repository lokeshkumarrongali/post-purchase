import React from 'react';

function AddOnCard({ title, benefit, reason, onAdd, onSkip, isSelected }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <h4>{title}</h4>
      <p><strong>Benefit:</strong> {benefit}</p>
      <p style={{ fontSize: '0.9em', color: '#555' }}><em>Why: {reason}</em></p>
      
      <div style={{ marginTop: '1rem' }}>
        {isSelected ? (
          <span style={{ color: 'green', fontWeight: 'bold', marginRight: '1rem' }}>Added!</span>
        ) : (
          <button onClick={onAdd} style={{ marginRight: '1rem' }}>Add</button>
        )}
        <button onClick={onSkip}>Skip</button>
      </div>
    </div>
  );
}

export default AddOnCard;
