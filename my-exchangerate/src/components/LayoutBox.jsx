import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UnitSelect from './UnitSelect';

const LayoutBox = () => {
  const [data, setData] = useState(0);
  const [unitList, setUnitList] = useState([]);
  const [exchangeVal, setExchangeVal] = useState({
    baseUnit: 'USD',
    targetUnit: 'KRW',
    baseVal: 1
  });
  const { baseUnit, targetUnit, baseVal } = exchangeVal;

  const onChangeBase = (e) => {
    setExchangeVal({ ...exchangeVal, baseUnit: e.target.value });
  };
  const onChangeTarget = (e) => {
    setExchangeVal({ ...exchangeVal, targetUnit: e.target.value });
  };
  const onChangeBaseVal = (e) => {
    setExchangeVal({ ...exchangeVal, baseVal: e.target.value });
  };

  async function getData() {
    try {
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/4f8abd7b94423f6ea9f54c21/pair/${baseUnit}/${targetUnit}/${baseVal}`
      );
      setData(response.data.conversion_result);
      // console.log('response:', response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function getCode() {
    try {
      const response = await axios.get(
        'https://v6.exchangerate-api.com/v6/4f8abd7b94423f6ea9f54c21/latest/USD'
      );
      setUnitList(Object.keys(response.data.conversion_rates));
      // console.log('response:', response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCode();
  }, []);
  useEffect(() => {
    getData();
  }, [exchangeVal]);

  return (
    <div className='layoutBox'>
      <h1 className='title'>My ExchangeRate</h1>
      <div className='moneyLayoutWrap'>
        <div className='moneyLayout'>
          <UnitSelect
            unit={unitList}
            selectUnit={baseUnit}
            onChangeUnit={onChangeBase}
          ></UnitSelect>
          <input
            type='text'
            className='exchangePrice'
            value={baseVal}
            onChange={onChangeBaseVal}
          />
        </div>
        {/* <ExchangePrice></ExchangePrice> */}
        <div className='swap'>=</div>
        <div className='moneyLayout'>
          <UnitSelect
            unit={unitList}
            selectUnit={targetUnit}
            onChangeUnit={onChangeTarget}
          ></UnitSelect>
          <input
            type='text'
            className='exchangePrice'
            value={baseVal && data}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutBox;
