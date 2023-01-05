import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import logo from '../Images/purpleLogo.webp';
import CircularImg from './CircularImage';
import { clothing, products, tech } from '../Data/products';
import { appContext } from '../App';

export default function Cart({ filterData }) {
  const [cartProducts, setCartProducts] = useState([
    ...products.filter(item =>
      localStorage.getItem('cartFurniture').split(' ').includes(item.id.toString())
    ),
    ...clothing.filter(item =>
      localStorage.getItem('cartClothing').split(' ').includes(item.id.toString())
    ),
    ...tech.filter(item =>
      localStorage.getItem('cartTech').split(' ').includes(item.id.toString())
    ),
  ]);
  const removeItem = index => {
    switch (cartProducts[index].brand) {
      case 'clothing':
        localStorage.setItem(
          'cartClothing',
          filterData(localStorage.getItem('cartClothing'), cartProducts[index])
        );
        break;
      case 'tech':
        localStorage.setItem(
          'cartTech',
          filterData(localStorage.getItem('cartTech'), cartProducts[index])
        );
        break;
      case 'furniture':
        localStorage.setItem(
          'cartFurniture',
          filterData(localStorage.getItem('cartFurniture'), cartProducts[index])
        );
        break;
    }
    setCartProducts(cartProducts.filter((item, i) => i !== index));
  };
  return (
    <appContext.Consumer>
      {context => (
        <Transition.Root show={context.showCart} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={context.setShowCart}>
            <Transition.Child
              as={Fragment}
              enter='ease-in-out duration-500'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-500'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-hidden'>
              <div className='absolute inset-0 overflow-hidden'>
                <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                  <Transition.Child
                    as={Fragment}
                    enter='transform transition ease-in-out duration-500 sm:duration-700'
                    enterFrom='translate-x-full'
                    enterTo='translate-x-0'
                    leave='transform transition ease-in-out duration-500 sm:duration-700'
                    leaveFrom='translate-x-0'
                    leaveTo='translate-x-full'
                  >
                    <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                      <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                        <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                          <div className='flex items-start justify-between'>
                            <Dialog.Title className='text-lg font-medium text-gray-900'>
                              <b>Shopping cart</b>
                            </Dialog.Title>
                            <div className='ml-3 flex h-7 items-center'>
                              <button
                                type='button'
                                className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                                onClick={() => context.setShowCart(false)}
                              >
                                <span className='sr-only'>Close panel</span>
                                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                              </button>
                            </div>
                          </div>

                          <div className='mt-8'>
                            <div className='flow-root'>
                              {cartProducts.length < 1 ? (
                                <div className='text-center flex flex-col items-center justify-start relative top-20'>
                                  <CircularImg
                                    width='150px'
                                    background={`url('${logo}')`}
                                  />
                                  <b className='my-2'>Your cart is empty</b>
                                  <div>browse categories and discover best deals</div>
                                </div>
                              ) : (
                                <ul
                                  role='list'
                                  className='-my-6 divide-y divide-gray-200'
                                >
                                  {cartProducts.map((product, i) => (
                                    <li key={i} className='flex py-6 relative right-5'>
                                      <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                        <img
                                          src={product.image}
                                          alt='product display'
                                          className='mx-w-[100%] max-h-[100%]  h-full w-full object-cover object-center'
                                        />
                                      </div>

                                      <div className='ml-4 flex flex-1 flex-col '>
                                        <div>
                                          <div className='flex justify-between text-base font-medium text-gray-900'>
                                            <b>
                                              <div className='text-black whitespace-nowrap no-underline'>
                                                {product.title}
                                              </div>
                                            </b>
                                            <p className='ml-4'>${product.price}</p>
                                          </div>
                                          <p className='relative bottom-3 pb-4 text-sm text-gray-500'>
                                            {product.color}
                                          </p>
                                        </div>
                                        <div className='flex flex-1 items-end justify-between text-sm'>
                                          <p className='text-gray-500'>
                                            Qty {product.quantity}
                                          </p>

                                          <div className='flex'>
                                            <button
                                              onClick={() => removeItem(i)}
                                              type='button'
                                              className='relative bottom-3 font-medium text-[#755da9] hover:text-[#7552bf]'
                                            >
                                              Remove
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                          {cartProducts.length < 1 ? (
                            <div className='my-6'>
                              <Link
                                to='/shop'
                                onClick={() => context.setShowCart(false)}
                                className='no-underline flex items-center justify-center rounded-md border border-transparent bg-[#7e62ba] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#6641b7]'
                              >
                                Start shopping
                              </Link>
                            </div>
                          ) : (
                            <div>
                              <div className='flex justify-between text-base font-medium text-gray-900'>
                                <p>Subtotal</p>
                                <p>
                                  $
                                  {cartProducts.reduce((prev, current) => {
                                    return prev + Number(current.price);
                                  }, 0)}
                                </p>
                              </div>
                              <p className='mt-0.5 text-sm text-gray-500'>
                                Shipping and taxes calculated at checkout.
                              </p>
                              <div onClick={() => context.setNextUpdate(true)} className='mt-6'>
                                <div
                                  className='no-underline flex items-center justify-center rounded-md border border-transparent bg-[#7e62ba] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#6641b7]'
                                >
                                  Checkout
                                </div>
                              </div>
                              <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                                <p>
                                  or<span> </span>
                                  <button
                                    type='button'
                                    className='font-medium text-[#755da9] hover:text-[#7552bf]'
                                    onClick={() => context.setShowCart(false)}
                                  >
                                    Continue Shopping
                                    <span aria-hidden='true'> &rarr;</span>
                                  </button>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </appContext.Consumer>
  );
}
