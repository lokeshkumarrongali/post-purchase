import React from 'react';

function OrderTimelineSection({ orderStatus }) {
  const steps = ['Ordered', 'Packed', 'Shipped', 'Delivered'];

  const getStepStatus = (step, index) => {
    const statusMap = {
      ordered: 0,
      shipped: 2,
      delivered: 3,
    };

    const currentIndex = statusMap[orderStatus] || 0;

    if (index < currentIndex) return 'completed';
    if (index === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div>
      <h3>Order Timeline</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {steps.map((step, index) => {
          const status = getStepStatus(step, index);
          return (
            <div key={step} className={`step ${status}`}>
              <span>{step}</span>
              <span style={{ marginLeft: '0.5rem', fontSize: '0.8em', color: 'gray' }}>
                ({status})
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderTimelineSection;
