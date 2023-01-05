import CircularImg from './CircularImage';

const Profile = props => {
  const styles = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    lineHeight: '3px',
    fontSize: '0.8em',
    whiteSpace: 'nowrap',
  };
  return (
    <div className={props.className} style={styles}>
      <CircularImg background={`url(${props.image}`} width='35px' />
      <div className='ms-2'>
        <p className='mt-3'>Designed by</p>
        <p>
          <b>{props.name}</b>
        </p>
      </div>
    </div>
  );
};

export default Profile;
