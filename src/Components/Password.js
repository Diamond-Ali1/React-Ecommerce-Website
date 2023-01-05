import { useToggle } from '../hooks/useToggle';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import '../pages/signUp/signUp.css';

const Password = ({ name, register, className, eyeClassName }) => {
  const [visible, handleVisible] = useToggle();
  const [PassWord, setPassWord] = useState('password');

  const handleSwitch = () => {
    handleVisible();
    PassWord === 'password' ? setPassWord('text') : setPassWord('password');
  };
  return (
    <div className='relative'>
      <input className={`password ${className}`} type={PassWord} {...register(name)} />
      <span onClick={handleSwitch} className={`eye ${eyeClassName}`}>
        {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
      </span>
    </div>
  );
};

export default Password;
