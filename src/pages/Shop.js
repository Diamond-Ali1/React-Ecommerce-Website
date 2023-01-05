import { useContext } from 'react';
import { appContext } from '../App';
import Footer from '../Components/footer/Footer';
import Product from '../Components/Product';
import './Home/Home.css';

const Shop = () => {
  const { products, clothing, tech, setFavourites, setSelectedProduct, setOpen } =
    useContext(appContext);

  return (
    <>
      <main className='relative top-20 products container'>
        {[...products, ...clothing, ...tech].map((product, i) => {
          return (
            <div className={`product${i + 1}`} key={i}>
              <Product
                id={i + 1}
                PaddedText='Read more'
                onClick={() => {
                  setSelectedProduct(product);
                  setOpen(true);
                }}
                onReact={() => setFavourites(product)}
                product={product}
              />
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Shop;
