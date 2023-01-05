import './signIn.css';
import '../../pages/signUp/signUp.css';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useToggle } from '../../hooks/useToggle';
import { Alert } from 'react-bootstrap';
const SignIn = ({ close, loggedIn }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, handleVisible] = useToggle();
  const [inputType, setInputType] = useState('password');
  const [success, setSuccess] = useState(false);
  const account = localStorage.getItem(email);

  //password visibility switch
  const handleSwitch = () => {
    handleVisible();
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };
  const handleErrorMessage = message => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };
  const handleLogIn = () => {
    loggedIn(true);
    localStorage.setItem('loggedIn', JSON.stringify(true));
    localStorage.setItem(
      'accountName',
      `${JSON.parse(account).firstName[0].toUpperCase()}${JSON.parse(
        account
      ).firstName.slice(1)} ${JSON.parse(account).lastName[0].toUpperCase()}${JSON.parse(
        account
      ).lastName.slice(1)}`
    );
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      close();
    }, 2000);
  };
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!account) {
        handleErrorMessage('account does not exist please create an account');
      }
      if (account) {
        JSON.parse(account).password === password
          ? handleLogIn()
          : handleErrorMessage('Password is incorrect, please try again...');
      }
    }, 600);
  };
  return (
    <div className='backdrop'>
      {success && (
        <Alert
          variant='success'
          dismissible
          className='fixed top-5 left-[27%]'
          onClose={() => setSuccess(false)}
        >
          You have succssfully Logged in
        </Alert>
      )}
      {success ? (
        <div className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'>
          <ClipLoader color='white' size={209} />
        </div>
      ) : (
        <div className='container logInModal'>
          <div>
            <div onClick={close} className='closeWrapper '>
              <div className='closeModal'>
                <GrClose />
              </div>
            </div>
            <div className='col-md-3'>
              <div>
                <label className='my-2'>
                  <b>Email</b>
                </label>
                <br />
                <input
                  type='email'
                  className='textInput input'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <br />
              </div>
              <div>
                <label className='my-2'>
                  <b>Password</b>
                </label>
                <br />
                <div className='eyeShell'>
                  <div className='relative'>
                    <input
                      className='password input'
                      type={inputType}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <span onClick={handleSwitch} className='visible eye'>
                      {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                  </div>
                </div>
              </div>
              <div className='my-4'>
                <button onClick={handleClick} className='submit login'>
                  {loading ? <ClipLoader color='white' size={29} /> : 'Log in'}
                </button>
                {errorMessage && (
                  <small className='text-[red] min-w-full whitespace-nowrap'>
                    {errorMessage}
                  </small>
                )}
              </div>
              <div className='sign mt-3 '>
                Don't have an account ?
                <span className='purple'>
                  <Link onClick={close} to='/signUp'>
                    <b> Sign Up</b>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
