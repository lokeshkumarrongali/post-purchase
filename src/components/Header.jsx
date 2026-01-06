import React from 'react';

function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '1rem 2rem', 
      borderBottom: '1px solid #eaeaea', 
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#333' }}>
        PostPay
      </div>
      <div style={{ fontSize: '1rem', color: '#666', fontWeight: '500' }}>
        Your Order
      </div>
    </header>
  );
}

export default Header;
