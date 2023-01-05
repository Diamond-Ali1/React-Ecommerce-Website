import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import PaddedText from '../Padded Text';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='container d-flex flex-row flex-wrap justify-content-between align-items-start mt-5'>
      <div className='col-md-3'>
        <h2>Stay upto date!</h2>
        <div>be the first to know about the new promotion and sales</div>
        <input placeholder='Your email' type='email' />
        <PaddedText
          text='Subscribe'
          color='white'
          background='#9784bf'
          hoverColor='white'
          hoverBg='#603ead'
          className='mb-5'
        />
        <small className='d-none d-md-block'>Ⓒ 2022 All right reserved</small>
      </div>
      <div className='col-md-7 d-flex flex-wrap flex-row justify-content-start gap-5 gap-md-0 justify-content-md-around align-items-start'>
        <div>
          <div>
            <b>Links</b>
          </div>
          <ul>
            <li>About us</li>
            <li>Designers</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <div>
            <b>Products</b>
          </div>
          <ul>
            <li>Furnitures</li>
            <li>Clothing</li>
            <li>Tech</li>
            <li>All products</li>
          </ul>
        </div>
        <div className='col-md-3 contactField'>
          <div>
            <b>Contact</b>
          </div>
          <div>
            <b>Head office</b>
          </div>
          <div>plot 10, epic plaza</div>
          <div> uyo, Akwa Ibom state </div>
          <div>Nigeria</div>
          <p>+2347062429505</p>
          <ul className='contactIcons d-flex flex-row flex-nowrap justify-content-start gap-5 align-items-center'>
            <li>
              <a className='text-black' href='https://twitter.com/Diamond_Ali424'>
                <FiTwitter />
              </a>
            </li>
            <li>
              <a className='text-black' href='https://github.com/Diamond-Ali1'>
                <BsGithub />
              </a>
            </li>
            <li>
              <a className='text-black' href='https://www.facebook.com/dheer424/'>
                <AiOutlineFacebook />
              </a>
            </li>
            <li>
              <a className='text-black'>
                <BsWhatsapp />
              </a>
            </li>
          </ul>
          <small className='d-md-none d-block'>Ⓒ 2022 All right reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
