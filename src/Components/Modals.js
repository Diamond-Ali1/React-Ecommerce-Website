import { useContext } from 'react';
import { Alert } from 'react-bootstrap';
import { appContext } from '../App';
import Cart from './Cart';
import ConfirmationMessage from './ConfirmationMessage';
import SignIn from './signIn/SignIn';
import ViewProduct from './ViewProduct';

const Modals = () => {
  const {
    openModal,
    handleModal,
    setLoggedIn,
    showCart,
    filterData,
    open,
    selectedProduct,
    showConfirmationMessage,
    nextUpdate,
    setNextUpdate,
  } = useContext(appContext);
  return (
    <div>
      {/* MODALS */}
      {openModal && <SignIn close={handleModal} loggedIn={setLoggedIn} />}
      {showCart && <Cart filterData={filterData} />}
      {open && <ViewProduct filterData={filterData} product={selectedProduct} />}
      {showConfirmationMessage && <ConfirmationMessage />}
      {nextUpdate && (
        <div className='fixed z-30 top-[70px] left-[82%] translate-x-[-50%] min-w-[100%]'>
          <Alert variant='warning' dismissible onClose={() => setNextUpdate(false)}>
            Sorry this feature have not been added yet, it will be added in the next
            update, thanks
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Modals;
