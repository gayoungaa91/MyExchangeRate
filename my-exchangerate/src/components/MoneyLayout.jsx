import React from 'react';
import ExchangePrice from './ExchangePrice';
import UnitSelect from './UnitSelect';

const MoneyLayout = () => {
  return (
    <div className='moneyLayout'>
      <UnitSelect />
      <ExchangePrice />
    </div>
  );
};

export default MoneyLayout;
