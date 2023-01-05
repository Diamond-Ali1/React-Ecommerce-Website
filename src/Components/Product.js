import Discount from './Discount';
import LoveReact from './loveReact/LoveReact';
import PaddedText from './Padded Text';
import '../pages/Home/Home.css';

const Product = props => {
  return (
    <div className={`product product${props.id}`}>
      <div>
        <Discount className='price' width='60px' text={`${props.product.price}$`} />
        <div onClick={props.onReact}>
          <LoveReact product={props.product} />
        </div>
      </div>
      <div className='productImg'>
        <img src={props.product.image} alt='product image' />
      </div>
      <div className='name'>
        <b>
          {props.product.title.length > 15
            ? `${props.product.title.slice(0, 15)}...`
            : props.product.title}
        </b>
      </div>
      <div className='discription'>{`${props.product.description.slice(0, 40)}...`}</div>
      <PaddedText
        width='90%'
        className='mt-2'
        text={props.PaddedText}
        color='white'
        background='#9784bf'
        hoverColor='white'
        hoverBg='#603ead'
        onClick={props.onClick}
      />
    </div>
  );
};

export default Product;
