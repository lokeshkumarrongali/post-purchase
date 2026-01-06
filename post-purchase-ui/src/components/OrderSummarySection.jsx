import React from 'react';

function OrderSummarySection({ order }) {
  return (
    <div>
      <h3 style={{ marginBottom: '1rem', color: '#444' }}>Order Summary</h3>
      <div style={{ 
        backgroundColor: '#fff',
        border: '1px solid #eaeaea', 
        padding: '1.5rem', 
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
          ORDER ID: <span style={{ color: '#333', fontWeight: '600' }}>{order.orderId}</span>
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <img 
            src="https://www.theaudiostore.in/cdn/shop/files/sennheiser-accentum-hybrid-noise-canceling-wireless-headphones-black-41622095659263.jpg?v=1744394599&width=2000" 
            alt="Product Placeholder" 
            style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '8px', 
              objectFit: 'cover',
              backgroundColor: '#f0f0f0'
            }} 
          />
          <div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Premium Wireless Headphones</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{order.productType}</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.1rem', fontWeight: '600', color: '#333' }}>
              ₹{order.productPrice.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummarySection;
