import React, { useState } from 'react';
import { mockOrder } from '../data/mockOrder';
import Header from '../components/Header';
import OrderSummarySection from '../components/OrderSummarySection';
import OrderTimelineSection from '../components/OrderTimelineSection';
import NextStepsSection from '../components/NextStepsSection';
import MonetisationSection from '../components/MonetisationSection';
import DemoControlSection from '../components/DemoControlSection';

const PostPurchasePage = () => {
  const [order, setOrder] = useState(mockOrder);

  return (
    <div>
      <Header />
      <OrderSummarySection order={order} />
      <OrderTimelineSection orderStatus={order.orderStatus} />
      <NextStepsSection />
      <MonetisationSection order={order} setOrder={setOrder} />
      <DemoControlSection order={order} setOrder={setOrder} />
    </div>
  );
};

export default PostPurchasePage;
