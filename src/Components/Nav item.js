import { useState } from 'react';
import { Link } from 'react-router-dom';
const NavItem = props => {
  const [hovered, sethovered] = useState(false);
  const styles = {
    background: props.color || '#9784bf',
    height: '3px',
    borderRadius: '50em',
    width: hovered ? '100%' : '0',
    transition: '.5s',
    cursor: 'pointer',
  };
  return (
    <>
      <Link
        to={props.to}
        onClick={props.onClick}
        className={props.className}
        style={{ textDecoration: 'none' }}
        onMouseOver={() => sethovered(true)}
        onMouseOut={() => sethovered(false)}
      >
        <div><b>{props.text}</b></div>
        <div style={styles}></div>
      </Link>
    </>
  );
};

export default NavItem;
