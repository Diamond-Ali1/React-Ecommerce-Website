import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './signUp.css';
import Password from '../../Components/Password';
import Input from '../../Components/Input';
import { yupSchema } from '../../schema/yupSchema';
import { signUpImage } from '../../Data/images';
import { useContext } from 'react';
import { appContext } from '../../App';
import SignIn from '../../Components/signIn/SignIn';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { Alert } from 'react-bootstrap';

const SignUp = () => {
  const { handleModal, openModal, setLoggedIn } = useContext(appContext);
  const [creating, setCreating] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);
  const schema = yup.object().shape(yupSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClose = () => {
    successAlert ? setSuccessAlert(false) : setFailureAlert(false);
  };
  const submit = data => {
    setCreating(true);
    setTimeout(() => {
      setCreating(false);
      if (!localStorage.getItem(data.email)) {
        localStorage.setItem(data.email, JSON.stringify(data));
        setSuccessAlert(true);
        handleModal();
        setTimeout(() => {
          setSuccessAlert(false);
        }, 3000);
      } else {
        setFailureAlert(true);
        setTimeout(() => {
          setFailureAlert(false);
        }, 3000);
      }
    }, 1000);
  };
  return (
    <>
      {(successAlert || failureAlert) && (
        <Alert
          variant={successAlert ? 'success' : 'danger'}
          dismissible
          className='alert'
          onClose={handleClose}
        >
          {successAlert
            ? 'You have succssfully created an account'
            : 'Account already exists'}
        </Alert>
      )}
      <div
        style={{ backgroundImage: "url('../../Images/background 2.jpg')" }}
        className='container d-lg-flex flex-lg-nowrap flex-lg-row topLevel m-top'
      >
        {openModal && <SignIn close={handleModal} loggedIn={setLoggedIn} />}
        <div className='col-lg-4 d-none d-lg-block imageSection'>
          <div className='imageWrapper'>
            <img src={signUpImage} />
          </div>
        </div>
        <div className='container col-lg-7'>
          <div>
            <div className='mb-4 mt-3 signUpHeading'>Register</div>
            <div className='my-3'>
              <b>Get quality furnitures for your home</b>
            </div>
            <div>
              Let's get you all set up so you can verify your personal account and begin
              purchasing quality items
            </div>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <div className='d-flex flex-row gap-lg-5 flex-wrap flex-lg-nowrap justify-content-between'>
              <Input
                name='firstName'
                label='First Name'
                register={register}
                error={errors.firstName?.message}
              />
              <Input
                name='lastName'
                label='Last Name'
                register={register}
                error={errors.lastName?.message}
              />
            </div>
            <div className='d-flex flex-row gap-lg-5 flex-wrap flex-lg-nowrap justify-content-between'>
              <Input
                name='phoneNumber'
                label='Phone Number'
                register={register}
                error={errors.phoneNumber?.message}
                type='number'
              />
              <Input
                name='email'
                label='Email'
                register={register}
                error={errors.email?.message}
                type='email'
              />
            </div>
            <div className='d-flex flex-row gap-lg-5 flex-wrap flex-lg-nowrap justify-content-between'>
              <div>
                <label className='my-2'>
                  <b>Password</b>
                </label>
                <br />
                <Password name='password' register={register} />
                <small className='error'>{errors.password?.message}</small>
              </div>
              <div>
                <label className='my-2'>
                  <b>Confirm Password</b>
                </label>
                <br />
                <Password name='confirmPassword' register={register} />
                <small className='error'>{errors.confirmPassword?.message}</small>
              </div>
            </div>
            <div>
              <div className='my-3'>
                <input
                  className='me-2 checkbox'
                  type='checkBox'
                  {...register('receiveEmails')}
                />
                <span>Yes I want to receive emails of our new products</span>
              </div>
              <div className='mb-3'>
                <input
                  className='me-2 checkbox'
                  type='checkBox'
                  {...register('agreeToTerms')}
                />
                <span>
                  I agreed to the{' '}
                  <span className='purple'>
                    <b>Terms, Privacy policy</b>
                  </span>{' '}
                  and{' '}
                  <span className='purple'>
                    <b>fees</b>
                  </span>
                </span>
                <br />
                <small className='error'>{errors.agreeToTerms?.message}</small>
              </div>
            </div>
            <div className='mb-5'>
              <button className='submit ' type='submit'>
                {creating ? <ClipLoader color='white' size={29} /> : 'Create an account'}
              </button>
              {failureAlert && (
                <small className='error d-block'>Account already exists</small>
              )}
            </div>
          </form>
          <div className='sign'>
            Already have an account ?{' '}
            <span className='purple'>
              <b onClick={handleModal}>Sign in</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
