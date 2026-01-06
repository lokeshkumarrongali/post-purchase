import React from 'react';
import AddOnCard from './AddOnCard';

function MonetisationSection({ order, setOrder }) {
  const getAddOnData = () => {
    switch (order.orderStatus) {
      case 'ordered':
        return {
          key: 'protection',
          title: 'Damage Protection',
          benefit: 'Covers accidental damage during transit',
          reason: 'Recommended before your order ships',
        };
      case 'shipped':
        return {
          key: 'warranty',
          title: 'Warranty / Return Extension',
          benefit: 'Extend your return window by 30 days',
          reason: 'Great peace of mind while your item is on the way',
        };
      case 'delivered':
        return {
          key: 'subscription',
          title: 'Reorder / Subscription',
          benefit: 'Save 10% on your next order',
          reason: 'Did you like it? Subscribe for more!',
        };
      default:
        return null;
    }
  };

  const addOnData = getAddOnData();

  if (!addOnData) return null;

  const handleAdd = () => {
    setOrder((prev) => ({
      ...prev,
      selectedAddOns: {
        ...prev.selectedAddOns,
        [addOnData.key]: true,
      },
    }));
  };

  const handleSkip = () => {
    // Skip logic: do nothing as per requirements
    console.log('Skipped add-on:', addOnData.key);
  };

  return (
    <div>
      <h3>Smart Add-Ons</h3>
      <AddOnCard
        title={addOnData.title}
        benefit={addOnData.benefit}
        reason={addOnData.reason}
        onAdd={handleAdd}
        onSkip={handleSkip}
        isSelected={order.selectedAddOns[addOnData.key]}
      />
    </div>
  );
}

export default MonetisationSection;
