import React from 'react';

function AddOnCard({ title, benefit, reason, onAdd, onSkip }) {
  return (
    <div style={{ 
      border: '1px solid #cce5ff', 
      backgroundColor: '#f0f7ff',
      padding: '1.5rem', 
      marginTop: '1rem', 
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,123,255,0.1)'
    }}>
      <h4 style={{ marginBottom: '0.5rem', color: '#0056b3', fontSize: '1.1rem' }}>{title}</h4>
      <p style={{ marginBottom: '0.5rem', color: '#333' }}><strong>Benefit:</strong> {benefit}</p>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}><em>Why: {reason}</em></p>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={onAdd} style={{ 
          padding: '0.6rem 1.5rem',
          fontWeight: '600',
          boxShadow: '0 2px 4px rgba(0,123,255,0.2)'
        }}>Add to Order</button>
        <button onClick={onSkip} className="secondary">Skip</button>
      </div>
    </div>
  );
}

export default AddOnCard;
