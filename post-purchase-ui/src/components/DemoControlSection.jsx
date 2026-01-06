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
    <div>
      <h3>Demo Controls</h3>
      <button onClick={() => updateStatus('ordered')}>Set Ordered</button>
      <button onClick={() => updateStatus('shipped')}>Set Shipped</button>
      <button onClick={() => updateStatus('delivered')}>Set Delivered</button>
      <button onClick={resetOrder}>Reset</button>
      <p>Current Status: {order.orderStatus}</p>
    </div>
  );
}

export default DemoControlSection;
