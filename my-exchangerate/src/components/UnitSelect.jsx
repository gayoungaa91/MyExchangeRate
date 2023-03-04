import React from 'react';

const UnitSelect = () => {
  return (
    <div className='unitSlect'>
      <select name='pets' id='pet-select' defaultValue={'krw'}>
        <option value='usd'>USD</option>
        <option value='krw'>KRW</option>
      </select>
    </div>
  );
};

export default UnitSelect;
