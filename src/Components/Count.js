const Count = ({ inputValue, setInputValue }) => {
  const buttonStyles = {
    padding: '8px',
    color: 'white',
    background: '#9784bf',
    borderRadius: '2px',
    width: '50px',
    textAlign: 'center',
    fontSize: '1.5em',
  };
  const inputStyles = {
    textAlign: 'center',
    width: '20%',
    fontWeight: '800',
    paddingLeft: '12px',
  };
  return (
    <div className='d-flex flex-nowrap flex-row justify-content-start gap-2 ml-1 my-3'>
      <div
        className='cursor-pointer hover:bg-[#815ad4] '
        style={buttonStyles}
        onClick={() => inputValue > 1 && setInputValue(inputValue - 1)}
      >
        -
      </div>
      <input style={inputStyles} type={'number'} value={inputValue} disabled />

      <div
        className='cursor-pointer hover:bg-[#815ad4]'
        style={buttonStyles}
        onClick={() => inputValue < 6 && setInputValue(inputValue + 1)}
      >
        +
      </div>
    </div>
  );
};

export default Count;
