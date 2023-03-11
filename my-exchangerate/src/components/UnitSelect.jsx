const UnitSelect = ({ unit, selectUnit, onChangeUnit }) => {
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
