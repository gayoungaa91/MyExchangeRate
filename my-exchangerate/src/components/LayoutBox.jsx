import React from 'react';
import MoneyLayout from './MoneyLayout';

const LayoutBox = () => {
  return (
    <div className='layoutBox'>
      <h1 className='title'>My ExchangeRate</h1>
      <div className='moneyLayoutWrap'>
        <MoneyLayout></MoneyLayout>
        <div className='swap'>=</div>
        <MoneyLayout></MoneyLayout>
      </div>
    </div>
  );
};

export default LayoutBox;
