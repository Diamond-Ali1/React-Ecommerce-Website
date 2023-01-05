import { useState } from 'react';

const PaddedText = props => {
  let [isHovered, setIsHovered] = useState(false);

  const styles = {
    color: isHovered ? props.hoverColor : props.color || 'black',
    background: isHovered ? props.hoverBg : props.background,
    borderTopLeftRadius: '300px',
    borderBottomRightRadius: '300px',
    padding: '5px 20px',
    fontWeight: props.fontWeight,
    width: props.width || 'fit-content',
    transform: `scale(${isHovered ? '1.1,1.1' : '1,1'})`,
    transition: '.5s',
    boxShadow: isHovered ? '0px 10px 30px -10px #000, 0px -10px 30px -10px #000' : 'none',
    cursor: 'pointer',
    border: props.border || 'none',
    fontSize: props.fontSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div
      className={props.className}
      onClick={props.onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={styles}
    >
      {props.text}
    </div>
  );
};

export default PaddedText;
