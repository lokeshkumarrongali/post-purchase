import React from 'react';

function NextStepsSection() {
  return (
    <div>
      <h3>What Happens Next</h3>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ border: '1px solid #eee', padding: '1rem', flex: 1 }}>
          <h4>Packing</h4>
          <p>Your order is being packed and prepared for dispatch.</p>
        </div>
        <div style={{ border: '1px solid #eee', padding: '1rem', flex: 1 }}>
          <h4>Shipping Updates</h4>
          <p>You’ll receive shipping updates once your order is dispatched.</p>
        </div>
        <div style={{ border: '1px solid #eee', padding: '1rem', flex: 1 }}>
          <h4>Returns</h4>
          <p>Easy returns available as per our return policy.</p>
        </div>
      </div>
    </div>
  );
}

export default NextStepsSection;
