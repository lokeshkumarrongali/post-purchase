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
      <h3 style={{ marginBottom: '1rem', color: '#444' }}>Order Timeline</h3>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '12px',
        border: '1px solid #eaeaea',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
      }}>
        {steps.map((step, index) => {
          const status = getStepStatus(step, index);
          const isCompleted = status === 'completed';
          const isCurrent = status === 'current';
          
          return (
            <div key={step} style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              flex: 1,
              opacity: status === 'upcoming' ? 0.5 : 1,
              transition: 'opacity 0.3s ease'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: isCompleted || isCurrent ? '#007bff' : '#ddd',
                marginBottom: '0.5rem',
                transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                boxShadow: isCurrent ? '0 0 0 4px rgba(0,123,255,0.2)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }} />
              <span style={{ 
                fontWeight: isCurrent ? '700' : '500',
                color: isCurrent ? '#007bff' : '#333',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease'
              }}>{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderTimelineSection;
