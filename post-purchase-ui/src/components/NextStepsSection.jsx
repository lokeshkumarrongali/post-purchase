import React from 'react';

function NextStepsSection() {
  return (
    <div>
      <h3 style={{ marginBottom: '1rem', color: '#444' }}>What Happens Next</h3>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ 
          backgroundColor: '#fff',
          border: '1px solid #eaeaea', 
          padding: '1.5rem', 
          flex: 1,
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>Packing</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>Your order is being packed and prepared for dispatch.</p>
        </div>
        <div style={{ 
          backgroundColor: '#fff',
          border: '1px solid #eaeaea', 
          padding: '1.5rem', 
          flex: 1,
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>Shipping Updates</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>You’ll receive shipping updates once your order is dispatched.</p>
        </div>
        <div style={{ 
          backgroundColor: '#fff',
          border: '1px solid #eaeaea', 
          padding: '1.5rem', 
          flex: 1,
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
        }}>
          <h4 style={{ marginBottom: '0.5rem', color: '#333' }}>Returns</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>Easy returns available as per our return policy.</p>
        </div>
      </div>
    </div>
  );
}

export default NextStepsSection;
