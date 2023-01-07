import PaddedText from '../../Components/Padded Text';
import Profile from '../../Components/Profile';
import profile1 from '../../Images/profile1.jpg';
import profile2 from '../../Images/profile2.jpg';
import profile3 from '../../Images/profile3.jpg';
import chair from '../../Images/chair.png';
import chair2 from '../../Images/chair2.png';
import CircularImg from '../../Components/CircularImage';
import './Home.css';
import Discount from '../../Components/Discount';
import NavItem from '../../Components/Nav item';
import { useState, useContext, createContext } from 'react';
import { BsForwardFill } from 'react-icons/bs';
import RingLoader from 'react-spinners/RingLoader';
import greenSofa from '../../Images/green sofa.png';
import Reviews from '../../Data/Reviews';
import Product from '../../Components/Product';
import { appContext } from '../../App';
import Footer from '../../Components/footer/Footer';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { homeAnimation as animation } from '../../helpers/Animations.js';

const productContext = createContext();

const Home = () => {
  const { products, clothing, tech, setFavourites, setSelectedProduct, setOpen } =
    useContext(appContext);
  const [displayProduct, setDisplayProduct] = useState(5);
  const [loading, setLoading] = useState(null);
  const [loadedAllGoods, setLoaded] = useState(false);
  const [goods, setGoods] = useState(products);
  const [selectedReview, setSelectedReview] = useState(0);
  const [swapLoading, setSwapLoading] = useState(false);

  const handleClick = index => {
    setSelectedReview(index);
  };
  const loadGoods = () => {
    setLoading('loading');
    setTimeout(() => {
      if (loadedAllGoods) {
        setDisplayProduct(5);
        setLoaded(false);
        setLoading(null);
      } else {
        setDisplayProduct(goods.length);
        setLoaded(true);
        setLoading(null);
      }
    }, 500);
  };
  const swapData = data => {
    setSwapLoading(true);
    setTimeout(() => {
      setSwapLoading(false);
      setGoods(data);
    }, 400);
  };
  //animation field
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <main className='background-top m-top'>
        <div className=' container page relative flex flex-row flex-wrap-reverse flex-md-nowrap align-items-center'>
          <div className='col-md-6 leb'>
            <h2>
              <div className='textShell'>
                <div className='headingBoldText1'>Sit in luxury and</div>
              </div>
              <div className='textShell'>
                <div className='headingBoldText2'>Comfort</div>
              </div>
            </h2>
            <div className='textShell'>
              <div className='headingText'>
                Order the most comfortable, high quality, stylish furniture for your home.
              </div>
            </div>
            <div className='textShell'>
              <div className='headingButton'>
                <PaddedText
                  text='Buy now'
                  color='white'
                  background='#9784bf'
                  hoverColor='white'
                  hoverBg='#603ead'
                />
              </div>
            </div>
          </div>
          <div className='col-md-6 mt-3 topImgShell'>
            <div className='designer'>
              <Profile image={profile1} name='Diamond Ali' />
            </div>
            <div>
              <div className='topImgContainer'>
                <img src={chair} alt='product' className='topImg mt-5' />
              </div>
              <div className='topDiscount'>
                <Discount smallText='off' text='30%' width='100px' fontSize='2em' />
              </div>
            </div>
          </div>
        </div>
        <div className=' container d-md-flex featured  relative'>
          <div className='col-md-7 col-lg-8 mt-5 relative featuredProduct'>
            <h2 className='featuredText d-none d-md-block textShell'>
              <div className='featuredHeadingFragment'>Featured products</div>
            </h2>
            <h2 className='featuredText d-none d-md-block textShell'>
              <div className='featuredHeadingFragment'>this week</div>
            </h2>
            <h2 className='featuredText d-md-none'>Featured products this week</h2>
            <div className='profile2'>
              <Profile image={profile2} name='Nencsi Mehan' />
            </div>
            <img src={chair2} alt='sofa chair' className='featuredImg' />
            <Discount
              className='chairDiscount'
              text='260$'
              width='3.7em'
              smallFont='0.6em'
              fontSize='1.1em'
            />
            <Discount
              text='50$'
              width='3rem'
              smallFont='0.5em'
              fontSize='1em'
              className='verseDiscount'
            />
          </div>
          <div className='col-md-5 col-lg-3 productDiscription relative'>
            <div>
              <div className='productName TextShell'>
                <div>Leather sofa</div>
              </div>
              <p className='m-0 p-0 productContent'>
                This sofa will fit perfectly in your living room or in your hallway{' '}
              </p>
              <PaddedText
                className='mt-2 featuredButton'
                text='Buy now'
                color='white'
                background='#9784bf'
                hoverColor='white'
                hoverBg='#603ead'
              />
            </div>
            <div>
              <div className='productName textShell'>
                <div>Wooden bedside table</div>
              </div>
              <p className='m-0 p-0 productContent'>
                This table is very suitable for wrough iron sofa
              </p>
              <PaddedText
                className='mt-2 featuredButton'
                text='Buy now'
                color='white'
                background='#9784bf'
                hoverColor='white'
                hoverBg='#603ead'
              />
            </div>
          </div>
        </div>
        <div className='container mt-4 productField'>
          <div>
            <h2>Our products</h2>
          </div>
          <div>
            <div className='whitespace-nowrap d-flex flex-nowrap justify-content-between my-4  align-items-center shopNav'>
              <div className='d-flex flex-nowrap justify-content-end gap-4'>
                <div onClick={() => swapData(products)} className='ms-md-4 ms-1'>
                  <NavItem color='white' text='Furniture' />
                </div>
                <div onClick={() => swapData(clothing)}>
                  <NavItem color='white' text='Clothing' />
                </div>
                <div onClick={() => swapData(tech)}>
                  <NavItem color='white' text='Tech' />
                </div>
              </div>
              <Link to='/shop' style={{ textDecoration: 'none' }}>
                <PaddedText
                  className='me-md-4 shopLink'
                  text='Go to shop'
                  color='#7655bb'
                  background='white'
                  hoverColor='#7655bb'
                  hoverBg='white'
                  fontSize='0.9em'
                />
              </Link>
            </div>
            {swapLoading ? (
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  height: '50vh',
                }}
              >
                <RingLoader color={'#7655bb'} size={140} />
              </div>
            ) : (
              <div id='home' className='products'>
                {goods.map((product, i) => {
                  return (
                    i < displayProduct && (
                      <div key={i}>
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
                    )
                  );
                })}
                <div>
                  {loading == 'loading' ? (
                    <RingLoader color={'#7655bb'} size={110} />
                  ) : (
                    <div className='more' onClick={loadGoods}>
                      <div className='arrow'>
                        <BsForwardFill />
                      </div>
                      <div className='mb-2'>
                        {loadedAllGoods ? 'See less' : 'See more'}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='bottom container my-4'>
          <div className='col-md-5 col-lg-3'>
            <h2 className='textShell'>
              <div className='bottomHeading'>We are the best for your design</div>
            </h2>
            <p className='my-4 bottomContent'>
              In this online store you will find variety of designer item for your home.
              You can contact the designer of each and every product that we have here
              just incase you need a personal designer for your home
            </p>
            <div className=' buttomButton'>
              <PaddedText
                className='me-4 shopLink'
                text='Buy now'
                color='black'
                background='white'
                hoverColor='black'
                hoverBg='white'
                border='2px solid #a15228'
              />
            </div>
          </div>
          <div className='col-md-7 col-lg-9 bottomImgShell'>
            <Profile className='profile3' image={profile3} name='Lara Menson' />
            <img src={greenSofa} alt='sofa' className='bottomImg' />
          </div>
        </div>
        <div className='container customerReviews'>
          <h2>Customer Reviews</h2>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
            <div className='reviews col-md-7'>
              <div className='col-2'>
                {Reviews.map((review, index) => {
                  return (
                    index < 3 && (
                      <div key={index} className={` review${index + 1}`}>
                        <CircularImg
                          width='50px'
                          background={`url(${review.image})`}
                          onClick={() => handleClick(index)}
                          className='my-2'
                        />
                      </div>
                    )
                  );
                })}
              </div>
              <div className='col-8 me-1 me-md-5'>
                <CircularImg
                  width='80px'
                  background={`url(${Reviews[selectedReview].image})`}
                  className='mx-auto'
                  border='2px solid #7655bb'
                />
                <b>{Reviews[selectedReview].name}</b>
                <div className='rating'></div>
                <div>{Reviews[selectedReview].review}</div>
              </div>
              <div className='col-2'>
                {Reviews.slice(3).map((review, index) => {
                  return (
                    <div className={`review${index + 4}`} key={index}>
                      <CircularImg
                        width='50px'
                        background={`url(${review.image})`}
                        onClick={() => handleClick(index + 3)}
                        className='my-2'
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='col-md-4 commentsSection'>
              <h3>Leave a review</h3>
              <textarea
                className='border-2 border-black border-solid pl-2 pt-2'
                maxLength='400'
                rows='5'
                cols='31'
              />
              <div className='reviewRating'></div>
              <PaddedText
                text='Submit'
                color='white'
                background='#9784bf'
                hoverColor='white'
                hoverBg='#603ead'
                className='mt-2 buttomButton'
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
export { productContext };
