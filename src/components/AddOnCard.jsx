import React from 'react';

function AddOnCard({ title, benefit, reason, onAdd, onSkip, isSelected }) {
  return (
    <div style={{ 
      border: isSelected ? '1px solid #28a745' : '1px solid #cce5ff', 
      backgroundColor: isSelected ? '#f0fff4' : '#f0f7ff',
      padding: '1.5rem', 
      marginTop: '1rem', 
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      transition: 'all 0.3s ease'
    }}>
      <h4 style={{ marginBottom: '0.5rem', color: isSelected ? '#28a745' : '#0056b3', fontSize: '1.1rem' }}>{title}</h4>
      <p style={{ marginBottom: '0.5rem', color: '#333' }}><strong>Benefit:</strong> {benefit}</p>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}><em>Why: {reason}</em></p>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={onAdd} 
          disabled={isSelected}
          style={{ 
            padding: '0.6rem 1.5rem',
            fontWeight: '600',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: isSelected ? '#28a745' : '#007bff',
            cursor: isSelected ? 'default' : 'pointer',
            opacity: isSelected ? 0.9 : 1,
            transition: 'all 0.3s ease'
          }}
        >
          {isSelected ? 'Added ✓' : 'Add to Order'}
        </button>
        <button onClick={onSkip} className="secondary">Skip</button>
      </div>
    </div>
  );
}

export default AddOnCard;
