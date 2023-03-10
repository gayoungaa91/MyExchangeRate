import React, { useState, useEffect } from 'react';
import MoneyLayout from './MoneyLayout';
import axios from 'axios';
import UnitSelect from './UnitSelect';
import ExchangePrice from './ExchangePrice';

const LayoutBox = () => {
  const [data, setData] = useState(0);
  console.log('🚀 ~ file: LayoutBox.jsx:9 ~ LayoutBox ~ data:', data);
  const [unitList, setUnitList] = useState([]);

  // const [baseUnit, setBaseUnit] = useState('USD');
  // const [targetUnit, setTargetUnit] = useState('KRW');
  // const [baseVal, setBaseVal] = useState(1);
  // const [targetVal, setTargetVal] = useState(Number);

  const [exchangeVal, setExchangeVal] = useState({
    baseUnit: 'USD',
    targetUnit: 'KRW',
    baseVal: 1
    // targetVal: 1
  });
  const { baseUnit, targetUnit, baseVal, targetVal } = exchangeVal;
  const onChangeBase = (e) => {
    console.log('45', e.target.value);
    setExchangeVal({ ...exchangeVal, baseUnit: e.target.value });
    // getData();
  };
  const onChangeTarget = (e) => {
    setExchangeVal({ ...exchangeVal, targetUnit: e.target.value });
  };
  const onChangeBaseVal = (e) => {
    setExchangeVal({ ...exchangeVal, baseVal: e.target.value });
  };
  // const onChangeTargetVal = (e) => {
  //   setExchangeVal({ ...exchangeVal, targetVal: e.target.value });
  // };

  async function getData() {
    try {
      const response = await axios.get(
        // 'https://v6.exchangerate-api.com/v6/4f8abd7b94423f6ea9f54c21/latest/USD'
        `https://v6.exchangerate-api.com/v6/4f8abd7b94423f6ea9f54c21/pair/${baseUnit}/${targetUnit}/${baseVal}`
        // `https://v6.exchangerate-api.com/v6/4f8abd7b94423f6ea9f54c21/pair/USD/KRW/2`
      );
      // setExchangeVal({
      //   ...exchangeVal,
      //   targetVal: response.data.conversion_result
      // });
      setData(response.data.conversion_result);
      console.log('response:', response.data);
      // setData(response.data.conversion_rates);
      // setUnitList(Object.keys(response.data.conversion_rates));
      // setTargetVal(response.data.conversion_rates['KRW']);

      // setRate(Object.values(response.data.conversion_rates));
    } catch (error) {
      console.log(error);
    }
  }
  async function getCode() {
    try {
      const response = await axios.get(
        'https://v6.exchangerate-api.com/v6/4f8abd7b94423f6ea9f54c21/latest/USD'
        // 'https://v6.exchangerate-api.com/v6/4f8abd7b94423f6ea9f54c21/pair/USD/KRW/1'
      );
      console.log('response:', response);

      setUnitList(Object.keys(response.data.conversion_rates));
      // setTargetVal(response.data.conversion_rates['KRW']);

      // setRate(Object.values(response.data.conversion_rates));
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   getCode();
  // }, []);
  useEffect(() => {
    getCode();
  }, []);
  useEffect(() => {
    // if (baseUnit === 'USD') {
    // getCode();
    getData();
    // } else {
    //   getData();
    // }
  }, [exchangeVal]);
  // }, [baseUnit, targetUnit, baseVal, targetVal]);
  return (
    <div className='layoutBox'>
      <h1 className='title'>My ExchangeRate</h1>
      <div className='moneyLayoutWrap'>
        {/* <MoneyLayout unit={unit}></MoneyLayout> */}
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
        {/* <MoneyLayout></MoneyLayout> */}
        <div className='moneyLayout'>
          <UnitSelect
            unit={unitList}
            selectUnit={targetUnit}
            onChangeUnit={onChangeTarget}
          ></UnitSelect>
          {/* <ExchangePrice></ExchangePrice> */}
          {/* <input>1</input> */}
          <input
            type='text'
            className='exchangePrice'
            value={baseVal && data}
            readOnly
            // onChange={onChangeTargetVal}
          />
          {/* <p className='exchangePrice'>{data}</p> */}
        </div>
      </div>
    </div>
  );
};

export default LayoutBox;
