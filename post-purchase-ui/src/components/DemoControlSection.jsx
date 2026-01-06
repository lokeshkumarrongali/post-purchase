import React from 'react';
import { mockOrder } from '../data/mockOrder';

function DemoControlSection({ order, setOrder }) {
  const updateStatus = (status) => {
    setOrder((prev) => ({ ...prev, orderStatus: status }));
  };

  const resetOrder = () => {
    setOrder(mockOrder);
  };

  return (
    <div style={{ 
      marginTop: '3rem', 
      padding: '1.5rem', 
      border: '1px dashed #ccc', 
      borderRadius: '8px', 
      backgroundColor: '#f9f9f9' 
    }}>
      <h3 style={{ marginBottom: '1rem', color: '#666', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Demo Controls (Dev Only)</h3>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <button onClick={() => updateStatus('ordered')} className="secondary">Set Ordered</button>
        <button onClick={() => updateStatus('shipped')} className="secondary">Set Shipped</button>
        <button onClick={() => updateStatus('delivered')} className="secondary">Set Delivered</button>
        <button onClick={resetOrder} className="secondary" style={{ marginLeft: 'auto' }}>Reset</button>
      </div>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>
        Current Status: <span style={{ fontWeight: 'bold', color: '#333' }}>{order.orderStatus}</span>
      </p>
    </div>
  );
}

export default DemoControlSection;
