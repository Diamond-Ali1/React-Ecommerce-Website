import { useContext } from 'react';
import Count from './Count';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { appContext } from '../App';
import { Fragment, useState } from 'react';
import { Dialog, RadioGroup, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AiFillStar } from 'react-icons/ai';
import { useEffect } from 'react';
import { clothing, tech, products } from '../Data/products';
import { productContext } from '../pages/Home/Home';
import { Alert } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ViewProduct({ filterData , product }) {
  const [addToCart, setAddToCart] = useState(false);
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  const [selectedColor, setSelectedColor] = useState('grey');
  const [selectedSize, setSelectedSize] = useState('black');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(1);
  const [cartClothing, setCartClothing] = useState(
    localStorage.getItem('cartClothing') || ''
  );
  const [cartTech, setCartTech] = useState(localStorage.getItem('cartTech') || '');
  const [cartFurniture, setCartFurniture] = useState(
    localStorage.getItem('cartFurniture') || ''
  );

  //updates the data for the carted items in local storage
  useEffect(() => {
    localStorage.setItem('cartClothing', cartClothing);
    localStorage.setItem('cartFurniture', cartFurniture);
    localStorage.setItem('cartTech', cartTech);
  }, [cartClothing, cartFurniture, cartTech]);

  //changes the products favourite item data
  useEffect(() => {
    clothing.map(item => {
      cartClothing.trim().split(' ').includes(item.id.toString()) &&
        (item.addedToCart = true);
    });
    products.map(item => {
      cartFurniture.trim().split(' ').includes(item.id.toString()) &&
        (item.addedToCart = true);
    });
    tech.map(item => {
      cartTech.trim().split(' ').includes(item.id.toString()) &&
        (item.addedToCart = true);
    });
  }, [cartClothing, cartTech, cartFurniture]);

  //get indexe of all products in cart
  const setCartItems = obj => {
    switch (obj.brand) {
      case 'furniture':
        obj.addedToCart
          ? setCartFurniture(filterData(cartFurniture, obj))
          : !cartFurniture.split(' ').includes(obj.id.toString()) &&
            setCartFurniture(`${cartFurniture} ${obj.id}`);
        break;
      case 'clothing':
        obj.addedToCart
          ? setCartClothing(filterData(cartClothing, obj))
          : !cartClothing.split(' ').includes(obj.id.toString()) &&
            setCartClothing(`${cartClothing} ${obj.id}`);
        break;
      case 'tech':
        obj.addedToCart
          ? setCartTech(filterData(cartTech, obj))
          : !cartTech.split(' ').includes(obj.id.toString()) &&
            setCartTech(`${cartTech} ${obj.id}`);
        break;
    }
  };

  //close alert
  const handleClose = () => {
    addToCart ? setAddToCart(false) : setAlreadyInCart(false);
  };

  const handleClick = obj => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCartItems(obj);
      obj.addedToCart ? setAlreadyInCart(true) : setAddToCart(true);
      product.quantity = inputValue;
    }, 600);
    setTimeout(() => {
      setAddToCart(false);
      setAlreadyInCart(false);
    }, 4600);
  };

  return (
    <appContext.Consumer>
      {context => (
        <Transition.Root show={context.open} as={Fragment}>
          <Dialog as='div' className='relative z-10' onClose={context.setOpen}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block' />
            </Transition.Child>

            <div className='fixed inset-0 z-10 overflow-y-auto'>
              <div className='fixed top-2 left-[30%] z-30 w-100'>
                {(addToCart || alreadyInCart) && (
                  <Alert
                    variant={addToCart ? 'success' : 'danger'}
                    dismissible
                    onClose={handleClose}
                  >
                    {addToCart
                      ? 'Item have been added to cart'
                      : 'Item is already in the cart'}
                  </Alert>
                )}
              </div>
              <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
                  enterTo='opacity-100 translate-y-0 md:scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 translate-y-0 md:scale-100'
                  leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
                >
                  <Dialog.Panel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
                    <div className='relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                      <button
                        type='button'
                        className='absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8'
                        onClick={() => context.setOpen(false)}
                      >
                        <span className='sr-only'>Close</span>
                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                      </button>

                      <div className='grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8'>
                        <div className='aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5'>
                          <img
                            src={product.image}
                            alt={'product'}
                            className='object-cover object-center'
                          />
                        </div>
                        <div className='sm:col-span-8 lg:col-span-7'>
                          <h2 className='text-2xl font-bold text-gray-900 sm:pr-12'>
                            {product.title}
                          </h2>

                          <section aria-labelledby='information-heading' className='mt-2'>
                            <h3 id='information-heading' className='sr-only'>
                              Product information
                            </h3>

                            <p className='text-2xl text-gray-900'>{product.price}$</p>

                            {/* Reviews */}
                            <div className='mt-2'>
                              <h4 className='sr-only'>Reviews</h4>
                              <div className='flex items-center justify-start'>
                                <div className='flex items-center'>
                                  {[0, 1, 2, 3, 4].map(rating => (
                                    <AiFillStar
                                      key={rating}
                                      className={classNames(
                                        product.rating.rate > rating
                                          ? 'text-gray-900'
                                          : 'text-gray-200',
                                        'h-5 w-5 flex-shrink-0'
                                      )}
                                      aria-hidden='true'
                                    />
                                  ))}
                                </div>
                                <p className='sr-only'>
                                  {product.rating.rate} out of 5 stars
                                </p>
                                <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>
                                  {product.rating.count} reviews
                                </p>
                              </div>
                            </div>
                            <div>{product.description}</div>
                          </section>

                          <section aria-labelledby='options-heading' className='mt-10'>
                            <h3 id='options-heading' className='sr-only'>
                              Product options
                            </h3>

                            <form>
                              {/* Colors */}
                              <div>
                                <h4 className='text-sm font-medium text-gray-900'>
                                  Color
                                </h4>

                                <RadioGroup
                                  value={selectedColor}
                                  onChange={setSelectedColor}
                                  className='mt-4'
                                >
                                  <RadioGroup.Label className='sr-only'>
                                    {' '}
                                    Choose a color{' '}
                                  </RadioGroup.Label>
                                  <span className='flex items-center space-x-3'>
                                    {product.colors.map(color => (
                                      <RadioGroup.Option
                                        key={color.name}
                                        value={color}
                                        className={({ active, checked }) =>
                                          classNames(
                                            color.selectedClass,
                                            active && checked ? 'ring ring-offset-1' : '',
                                            !active && checked ? 'ring-2' : '',
                                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                          )
                                        }
                                      >
                                        <RadioGroup.Label as='span' className='sr-only'>
                                          {' '}
                                          {color.name}{' '}
                                        </RadioGroup.Label>
                                        <span
                                          aria-hidden='true'
                                          className={classNames(
                                            color.class,
                                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                          )}
                                        />
                                      </RadioGroup.Option>
                                    ))}
                                  </span>
                                </RadioGroup>
                              </div>

                              {/* Sizes */}
                              <div className='mt-10'>
                                <div className='flex items-center justify-between'>
                                  <h4 className='text-sm font-medium text-gray-900'>
                                    Size
                                  </h4>
                                  <p className='text-sm font-medium text-[#9784bf] hover:text-[#7c5ac5]'>
                                    Size guide
                                  </p>
                                </div>

                                <RadioGroup
                                  value={selectedSize}
                                  onChange={setSelectedSize}
                                  className='mt-4'
                                >
                                  <RadioGroup.Label className='sr-only'>
                                    {' '}
                                    Choose a size{' '}
                                  </RadioGroup.Label>
                                  <div className='grid grid-cols-4 gap-4'>
                                    {product.sizes.map(size => (
                                      <RadioGroup.Option
                                        key={size.name}
                                        value={size}
                                        disabled={!size.inStock}
                                        className={({ active }) =>
                                          classNames(
                                            size.inStock
                                              ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                              : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                            active ? 'ring-2 ring-indigo-500' : '',
                                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                          )
                                        }
                                      >
                                        {({ active, checked }) => (
                                          <>
                                            <RadioGroup.Label as='span'>
                                              {size.name}
                                            </RadioGroup.Label>
                                            {size.inStock ? (
                                              <span
                                                className={classNames(
                                                  active ? 'border' : 'border-2',
                                                  checked
                                                    ? 'border-indigo-500'
                                                    : 'border-transparent',
                                                  'pointer-events-none absolute -inset-px rounded-md'
                                                )}
                                                aria-hidden='true'
                                              />
                                            ) : (
                                              <span
                                                aria-hidden='true'
                                                className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'
                                              >
                                                <svg
                                                  className='absolute inset-0 h-full w-full stroke-2 text-gray-200'
                                                  viewBox='0 0 100 100'
                                                  preserveAspectRatio='none'
                                                  stroke='currentColor'
                                                >
                                                  <line
                                                    x1={0}
                                                    y1={100}
                                                    x2={100}
                                                    y2={0}
                                                    vectorEffect='non-scaling-stroke'
                                                  />
                                                </svg>
                                              </span>
                                            )}
                                          </>
                                        )}
                                      </RadioGroup.Option>
                                    ))}
                                  </div>
                                </RadioGroup>
                                <div className='flex flex-nowrap justify-between items-center my-2'>
                                  <Count
                                    inputValue={inputValue}
                                    setInputValue={setInputValue}
                                  />
                                  <small className='text-[#9784bf]'>Quantity</small>
                                </div>
                              </div>

                              <div
                                onClick={() => {
                                  return context.loggedIn
                                    ? handleClick(product)
                                    : context.handleModal()
                                }}
                                className=' cursor-pointer mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#9784bf] py-3 px-8 text-base font-medium text-white hover:bg-[#815ad4] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                              >
                                {loading ? (
                                  <ClipLoader color='white' size={29} />
                                ) : (
                                  'Add to cart'
                                )}
                              </div>
                            </form>
                          </section>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </appContext.Consumer>
  );
}
