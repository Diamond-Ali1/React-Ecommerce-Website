import { useContext } from 'react';
import { appContext } from '../App';
import Footer from '../Components/footer/Footer';
import Product from '../Components/Product';
import './Home/Home.css';
const Favourites = () => {
  const { products, clothing, tech, setFavourites, setSelectedProduct, setOpen } =
    useContext(appContext);

  const allFavourites = [
    ...products.filter(item =>
      localStorage.getItem('favouriteFurniture').split(' ').includes(item.id.toString())
    ),
    ...clothing.filter(item =>
      localStorage.getItem('favouriteClothes').split(' ').includes(item.id.toString())
    ),
    ...tech.filter(item =>
      localStorage.getItem('favouriteTech').split(' ').includes(item.id.toString())
    ),
  ];

  return (
    <div className='container products m-top'>
      {allFavourites.length < 1 ? (
        <h1 className='text-center h-[100vh] w-[100vw] flex justify-center items-center mb-[50px]'>
          <b>You have no favourite products</b>
        </h1>
      ) : (
        allFavourites.map((product, i) => {
          return (
            <div className={`my-2 product${i + 1}`} key={i}>
              <Product
                PaddedText='Read more'
                product={product}
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
                onReact={() => setFavourites(product)}
              />
            </div>
          );
        })
      )}
      <Footer />
    </div>
  );
};

export default Favourites;
