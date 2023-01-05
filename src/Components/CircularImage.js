const CircularImg = props => {
  const styles = {
    color: props.color || 'black',
    width: props.width || 'fit-content',
    height: props.width,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: props.background,
    backgroundSize: 'cover',
    backgroundPosition: '100%',
    lineHeight: '150%',
    transform: props.transform,
    boxShadow: props.boxShadow,
    transition: '.5s',
    cursor: 'pointer',
    border: props.border || 'none',
  };

  return (
    <div
      onClick={props.onClick}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
      className={props.className}
      style={styles}
    >
      {' '}
      <div>
        <div style={{ fontSize: props.fontSize }}>
          <div>{props.boldText}</div>
        </div>
        <div style={{ fontSize: props.smallFont }}>{props.smallText}</div>
      </div>{' '}
    </div>
  );
};

export default CircularImg;
