import '../pages/signUp/signUp.css';

const Input = ({type ,error, label, name, register, className }) => {
  return (
    <div>
      <label className='my-2'>
        <b>{label}</b>
      </label>
      <br />
      <input type={type || 'text'} className={`textInput ${className}`} register {...register(name)} />
      <br />
      <small className='error'>{error}</small>
    </div>
  );
};

export default Input;
