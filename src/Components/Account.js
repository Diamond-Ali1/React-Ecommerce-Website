import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineInbox } from 'react-icons/ai';
import { appContext } from '../App';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Account({ signIn, close, loggedIn }) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md  bg-transparent px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'>
          <span className='text-2xl'>
            <BsPerson />
          </span>
          <span className='text-[1.2em] ml-1 mt-[2px] font-bold'>Account</span>
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <appContext.Consumer>
            {context => (
              <div className='py-1'>
                <Menu.Item>
                  {({ active }) => (
                    <div onClick={close} className='border-y '>
                      <button
                        onClick={
                          loggedIn
                            ? () => context.setShowConfirmationMessage(true)
                            : signIn
                        }
                        className='mx-auto px-3 w-[80%] no-underline flex items-center justify-center rounded-md border border-transparent bg-[#7e62ba] py-2 my-2 text-base font-medium text-white shadow-sm hover:bg-[#6641b7]'
                      >
                        Sign <span className='ml-1'> {loggedIn ? ' out' : ' in'}</span>
                      </button>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={close}
                      
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm no-underline'
                      )}
                    >
                      <div
                        onClick={loggedIn ? () => context.setNextUpdate(true) : signIn}
                        className='flex'
                      >
                        <span className='text-2xl'>
                          <BsPerson />
                        </span>
                        <span className='mt-[2px] ml-[10px]'>
                   
                          {loggedIn ? localStorage.getItem('accountName') : 'My Account'}
                        </span>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={close}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm no-underline'
                      )}
                    >
                      <div  onClick={() => context.setNextUpdate(true)} className='flex'>
                        <span className='text-2xl'>
                          <AiOutlineInbox />
                        </span>
                        <span className='mt-[2px] ml-[10px]'>Orders</span>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={close}
                      to='/favourites'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm no-underline'
                      )}
                    >
                      <div className='flex'>
                        <span className='text-2xl'>
                          <AiOutlineHeart />
                        </span>
                        <span className='mt-[2px] ml-[10px]'>Saved items</span>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            )}
          </appContext.Consumer>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
