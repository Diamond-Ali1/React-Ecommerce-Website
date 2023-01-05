import { products, clothing, tech } from '../Data/products';
import { useEffect, useState } from 'react';
import { useToggle } from './useToggle';

const useAppLogic = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') || false);
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [nextUpdate, setNextUpdate] = useState(false);
  const [favouriteClothes, setFavouriteClothes] = useState(
    localStorage.getItem('favouriteClothes') || ''
  );
  const [favouriteTech, setFavouriteTech] = useState(
    localStorage.getItem('favouriteTech') || ''
  );
  const [favouriteFurniture, setFavouriteFurniture] = useState(
    localStorage.getItem('favouriteFurniture') || ''
  );

  //login modal
  const [openModal, handleModal] = useToggle();

  //filter data
  const filterData = (data, comparison) => {
    return data
      .split(' ')
      .filter(item => item !== comparison.id.toString())
      .join(' ');
  };
  const checkCartStorage = str => {
    !localStorage.getItem(str) && localStorage.setItem(str, '');
  };
  useEffect(() => {
    checkCartStorage('cartClothing');
    checkCartStorage('cartTech');
    checkCartStorage('cartFurniture');
  }, []);

  //sets favourite items
  useEffect(() => {
    localStorage.setItem('favouriteClothes', favouriteClothes);
    localStorage.setItem('favouriteFurniture', favouriteFurniture);
    localStorage.setItem('favouriteTech', favouriteTech);
  }, [favouriteClothes, favouriteTech, favouriteFurniture]);

  //changes the products favourite item data
  useEffect(() => {
    clothing.map(item => {
      favouriteClothes.trim().split(' ').includes(item.id.toString())
        ? (item.favourite = true)
        : (item.favourite = false);
    });
    products.map(item => {
      favouriteFurniture.trim().split(' ').includes(item.id.toString())
        ? (item.favourite = true)
        : (item.favourite = false);
    });
    tech.map(item => {
      favouriteTech.trim().split(' ').includes(item.id.toString())
        ? (item.favourite = true)
        : (item.favourite = false);
    });
  }, [favouriteClothes, favouriteTech, favouriteFurniture]);

  //nav bar scroll animation
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    window.scrollY > 32 ? setScrolled(true) : setScrolled(false);
  };

  //adds item user reacts on to favorite items
  const setFavourites = obj => {
    switch (obj.brand) {
      case 'furniture':
        obj.favourite
          ? setFavouriteFurniture(filterData(favouriteFurniture, obj))
          : !favouriteFurniture.split(' ').includes(obj.id.toString()) &&
            setFavouriteFurniture(`${favouriteFurniture} ${obj.id}`);
        break;
      case 'clothing':
        obj.favourite
          ? setFavouriteClothes(filterData(favouriteClothes, obj))
          : !favouriteClothes.split(' ').includes(obj.id.toString()) &&
            setFavouriteClothes(`${favouriteClothes} ${obj.id}`);
        break;
      case 'tech':
        obj.favourite
          ? setFavouriteTech(filterData(favouriteTech, obj))
          : !favouriteTech.split(' ').includes(obj.id.toString()) &&
            setFavouriteTech(`${favouriteTech} ${obj.id}`);
        break;
    }
  };

  return {
    scrolled,
    products,
    clothing,
    tech,
    favouriteClothes,
    setFavouriteClothes,
    favouriteTech,
    setFavouriteTech,
    favouriteFurniture,
    setFavouriteFurniture,
    setFavourites,
    selectedProduct,
    setSelectedProduct,
    openModal,
    handleModal,
    loggedIn,
    setLoggedIn,
    open,
    setOpen,
    showCart,
    setShowCart,
    filterData,
    showConfirmationMessage,
    setShowConfirmationMessage,
    nextUpdate, 
    setNextUpdate
  };
};

export { useAppLogic };
