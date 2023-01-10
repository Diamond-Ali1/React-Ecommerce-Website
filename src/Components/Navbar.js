import CircularImg from './CircularImage';
import logo from '../Images/purpleLogo.webp';
import '../App.css';
import PaddedText from './Padded Text';
import NavItem from './Nav item';
import { Link } from 'react-router-dom';
import { createContext, useContext } from 'react';
import { appContext } from '../App';
import { useToggle } from '../hooks/useToggle';
import Account from './Account';
import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import Search from './Search';

export const navContext = createContext();
function CollapsibleExample() {
  const { handleModal, scrolled, setShowCart, setOpen, loggedIn, setSelectedProduct } =
    useContext(appContext);
  const cartProducts = [
    ...localStorage.getItem('cartTech').split(' '),
    ...localStorage.getItem('cartClothing').split(' '),
    ...localStorage.getItem('cartFurniture').split(' '),
  ];
  const [nav, toggleNav] = useToggle();
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      toggleNav();
    }
  };
  return (
    <div
      className={` pt-3 lg:px-8 fixed top-0 z-10 w-full pb-3 ${
        scrolled ? 'bg-[rgba(229,206,173)]' : 'bg-[transparent]'
      } ease-in`}
    >
      <div>
        <nav
          className='mx-[4%] flex h-9 items-center justify-between'
          aria-label='Global'
        >
          <div className='flex lg:min-w-0 lg:flex-1' aria-label='Global'>
            <Link to='/' className='no-underline  font-Quintessential -m-1.5 p-1.5'>
              <div className='flex justify-between items-center'>
                <CircularImg width='50px' background={`url('${logo}')`} />
                <b className='mt-1 text-black  relative left-2 top-2'>Diamond stores</b>
              </div>
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            >
              <span className='sr-only'>Open main menu</span>
              {/* <!-- Heroicon name: outline/bars-3 --> */}
              <svg
                onClick={toggleNav}
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
            </button>
          </div>
          <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12 whitespace-nowrap'>
            <navContext.Provider value={{ setSelectedProduct, setOpen }}>
              <Search width='133%' />
            </navContext.Provider>
          </div>
          <div className='hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end lg:items-center'>
            <Account signIn={handleModal} loggedIn={loggedIn} />
            <div
              onClick={() => setShowCart(true)}
              className='cursor-pointer relative right-5 flex flex-row items-center justify-center gap-1'
            >
              <b className='text-xl font-bold'>
                <AiOutlineShoppingCart />
              </b>
              <NavItem text='Cart' className='text-black' />
              {cartProducts.length > 3 && (
                <div className=' bg-[#9784bf] text-white w-4 h-4 right-[-12px] top-[-4px] font-bold text-[0.7em] rounded-[50%] flex items-center justify-center absolute'>
                  {cartProducts.length - 3}
                </div>
              )}
            </div>

            <Link to={loggedIn ? '/shop' : '/signUp'} className='no-underline`'>
              <PaddedText
                className='whitespace-nowrap'
                text={loggedIn ? 'Shop' : 'Sign up'}
                color='white'
                background='#9784bf'
                hoverColor='white'
                hoverBg='#603ead'
              />
            </Link>
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div className={!nav && 'hidden'} role='dialog' aria-modal='true'>
          <div
            focus='true'
            className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden'
          >
            <div className='flex h-9 items-center justify-between'>
              <div className='flex'>
                <Link
                  onClick={handleClick}
                  to='/'
                  className='no-underline  font-Quintessential -m-1.5 p-1.5'
                >
                  <div className='flex justify-between items-center'>
                    <CircularImg width='50px' background={`url('${logo}')`} />
                    <b className='mt-1 text-black   relative left-2 top-2'>
                      Diamond stores
                    </b>
                  </div>
                </Link>
              </div>
              <div className='flex'>
                <button
                  type='button'
                  className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                >
                  <span className='sr-only'>Close menu</span>
                  {/* <!-- Heroicon name: outline/x-mark --> */}
                  <svg
                    onClick={toggleNav}
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6'>
                <div className=' py-6'>
                  <div
                    onClick={() => {
                      setShowCart(true);
                      toggleNav();
                    }}
                    className='text-gray-900 relative hover:bg-gray-400/10 py-3 my-6 cursor-pointer flex flex-row items-center justify-center gap-1 text-center w-[fit-content]'
                  >
                    <b className='text-xl font-bold'>
                      <AiOutlineShoppingCart />
                    </b>
                    <NavItem text='Cart' className='text-black' />
                    {cartProducts.length > 3 && (
                      <div className=' bg-[#9784bf] z-30 text-white w-4 h-4 right-[-12px] top-[12px] font-bold text-[0.7em] rounded-[50%] flex items-center justify-center absolute'>
                        {cartProducts.length - 3}
                      </div>
                    )}
                  </div>

                  <Link
                    onClick={toggleNav}
                    to='/shop'
                    className='mb-6 text-center no-underline -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
                  >
                    <div className='flex flex-row justify-center items-center'>
                      <span className='text-2xl'>
                        <AiOutlineShopping />
                      </span>
                      <span className='mt-[2px] ml-[7px] justify-self-center'>Shop</span>
                    </div>
                  </Link>
                </div>
                <div className=''>
                  <div className='relative bottom-5 flex justify-center'>
                    <Account
                      signIn={handleModal}
                      close={handleClick}
                      loggedIn={loggedIn}
                    />
                  </div>
                  {!loggedIn && (
                    <Link
                      to='/signUp'
                      className=' no-underline flex flex-col justify-center items-center mt-6 mb-8'
                    >
                      <PaddedText
                        onClick={toggleNav}
                        text='Create an account'
                        color='white'
                        background='#9784bf'
                        hoverColor='white'
                        hoverBg='#603ead'
                      />
                    </Link>
                  )}
                  <div className='mt-4'>
                    <navContext.Provider value={{ setSelectedProduct, setOpen }}>
                      <Search width='100%' />
                    </navContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  {
  }
}

export default CollapsibleExample;
