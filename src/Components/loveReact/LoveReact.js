import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useState } from 'react';
import './LoveReact.css';

const LoveReact = props => {
  const [reacted, setReacted] = useState(props.product.favourite);
  const heartReact = () => {
    setReacted(!reacted);
  };

  return (
    <div className={reacted ? 'red' : 'black'} onClick={heartReact}>
      {reacted ? <BsHeartFill /> : <BsHeart />}{' '}
    </div>
  );
};

export default LoveReact;
