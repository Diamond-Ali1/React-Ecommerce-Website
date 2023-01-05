import CircularImg from './CircularImage';
import { useState } from 'react';

const Discount = props => {
  let [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <CircularImg
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        transform={`scale(${isHovered ? '1.1,1.1' : '1,1'})`}
        boxShadow={
          isHovered ? '0px 10px 30px -10px #000, 0px -10px 30px -10px #000' : 'none'
        }
        boldText={props.text}
        smallFont={props.smallFont}
        smallText={props.smallText || 'only'}
        fontSize={props.fontSize}
        color='white'
        background='linear-gradient(to bottom right,#a15228,80%,white)'
        className={props.className}
        width={props.width}
      />
    </div>
  );
};

export default Discount;
