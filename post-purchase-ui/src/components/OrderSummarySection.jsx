import React from 'react';

function OrderSummarySection({ order }) {
  return (
    <div>
      <h3>Order Summary</h3>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <p><strong>Order ID:</strong> {order.orderId}</p>
        <img 
          src="https://placehold.co/150" 
          alt="Product Placeholder" 
          style={{ display: 'block', margin: '1rem 0', maxWidth: '100%' }} 
        />
        <p><strong>Product:</strong> Premium Wireless Headphones</p>
        <p><strong>Category:</strong> {order.productType}</p>
        <p><strong>Price:</strong> ₹{order.productPrice}</p>
      </div>
    </div>
  );
}

export default OrderSummarySection;
