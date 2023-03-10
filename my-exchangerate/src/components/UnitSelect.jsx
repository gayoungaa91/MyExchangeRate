import { useState, useEffect } from 'react';

const UnitSelect = ({ unit, selectUnit, onChangeUnit }) => {
  console.log(
    '🚀 ~ file: UnitSelect.jsx:4 ~ UnitSelect ~ selectUnit:',
    selectUnit
  );
  // console.log('🚀 ~ file: UnitSelect.jsx:5 ~ UnitSelect ~ unit:', unit);
  // useEffect(() => {
  //   fetchKrwSalesList();
  // }, []);

  return (
    <div className='unitSlect'>
      <select name='code' onChange={onChangeUnit}>
        <option>{selectUnit && selectUnit}</option>
        {unit &&
          unit.map((code, idx) => (
            <option key={code + idx} hidden={code === selectUnit}>
              {code}
            </option>
          ))}
      </select>
    </div>
  );
};

export default UnitSelect;
// {/* <option value='usd'>{data.base_code}</option>
// <option value='krw'>KRW</option> */}
